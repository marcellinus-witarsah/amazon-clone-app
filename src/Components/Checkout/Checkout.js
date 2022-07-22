import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider/StateProvider'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__up'>
                <div className='checkout__left'>
                    <div className='checkout__ad'>
                    <img
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt=''/>
                    </div>

                    <div className='checkout__basket'>
                        <h3> Hello {user ? user.email : 'Guest'} </h3>
                        <h2  className='checkout__title'> Your Shopping Basket</h2>
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
                <div className='checkout__right'>
                    <div className='checkout__subtotal'>
                        <Subtotal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
