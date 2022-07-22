import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    return (
        <div className='order'>
            <h2> Order </h2>       
            <p>Order Time: {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className='order__id'>
                <strong>Order ID:</strong> {order.id}
            </p> 
            {order.data.basket?.map(item=>(
                <CheckoutProduct 
                id={item.id}
                title={item.title} 
                image={item.image} 
                price={item.price} 
                rating={item.rating}
                hideButton={true}
                />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                    <h3 className='order__total'> Order Total: {value}</h3>
                )
            }
            decimalScale={2}
            value={order.data.amount / 100}
            thousandSeparator={true}
            displayType={'text'}
            prefix={'$'}
            />
        </div>
    )
}

export default Order
