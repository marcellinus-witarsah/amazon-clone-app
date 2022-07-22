import React, { useEffect, useState } from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider/StateProvider'
import './Payment.css'
import { Link, useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { getSubTotal } from '../Reducer/Reducer'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { db } from '../../firebase'
import instance from '../../Axios'

function Payment() {
    const [{user, basket}, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory()

    const[error, setError] = useState(null)
    const[disabled, setDisabled] = useState(true)
    const[succeeded, setSucceeded] = useState(false)
    const[processing, setProcessing] = useState('')
    const[clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await instance({
                method: 'post',
                //stripe expects the total in a currencies subunits kalo 10 dolar dibacanya 10 cent jadi harus dikali 100
                url: `/payments/create?total=${getSubTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        
        getClientSecret();
    }, [basket])

    console.log('the secret is >>>', clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault()
        //fancy stripe stuff
        setProcessing(true)
        // const payload = await stripe
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            
            dispatch({
                type: 'EMPTY_BASKET',
            })

            history.replace('/orders')
        })
    }


    const handleChange = (e) => {
        //fancy stripe stuff
        setDisabled(e.empty)
        setError(e.error? e.error.message: '')
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1> Checkout (
                    <Link to='/checkout'> {basket?.length} items </Link>
                    )
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Jalan Pulo Macan I nomor 58</p>
                        <p>Tomang, Jakarta Barat</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div>
                        <h3>
                            Review item and delivery
                        </h3>
                    </div>
                    <div className='payment__items'>
                       {basket?.map((item) => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                       ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <h3 className='payment__cardDetailsTitle'>
                            Card Details
                        </h3>
                        <form onSubmit={handleSubmit}> 
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total :<strong>{value}</strong></h3>
                                    </>
                                )}
                                value={getSubTotal(basket)}
                                decimalScale={2}
                                thousandSeparator={true}
                                displayType='text'
                                prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}> 
                                    <span>{processing ? <p>Processing</p> : 'Buy now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
