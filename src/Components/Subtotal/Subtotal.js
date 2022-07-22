import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider'
import { getSubTotal } from '../Reducer/Reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory()
    const [{basket}, dispatch] = useStateValue()

    const proceedPayment = (e) => {
        if (basket.length === 0){
            alert('There is no item in basket')
        }
        else{
            history.push('./payment')
        }
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />
                        This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getSubTotal(basket)}
                displayType='text'
                thousandSeparator={true}
                prefix={'$'}
            />

            <button onClick={proceedPayment}> Process to checkout</button>
        </div>
        
    )
}

export default Subtotal
