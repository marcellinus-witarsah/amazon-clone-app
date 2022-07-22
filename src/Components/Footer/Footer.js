import React from 'react'
import './Footer.css'

function Footer() {
    
    return (
        <div className='footer'>
            <div className='footer__upperContainer'>
                <p>Back To Top</p>
            </div>
            <div className='footer__lowerContainer'>
                <div className='footer__info'>
                    <p className='footer__infoTitle'>
                        Get to Know Us
                    </p>
                    <div className='footer__infoContent'>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>About Amazon</p>
                        <p>Investor Relations</p>
                        <p>Amazon Devices</p>
                    </div>
                </div>
                <div className='footer__info'>
                    <p className='footer__infoTitle'>
                        Make Money with Us
                    </p>
                    <div className='footer__infoContent'>
                        <p>Sell products on Amazon</p>
                        <p>Sell on Amazon Business</p>
                        <p>Sell apps on Amazon</p>
                        <p>Become an Affiliate</p>
                        <p>Advertise Your Products</p>
                        <p>Self-Publish with Us</p>
                        <p>Host an Amazon Hub</p>
                        <p>› See More Make Money with Us</p>
                    </div>
                </div>
                <div className='footer__info'>
                    <p className='footer__infoTitle'>
                        Amazon Payment Products
                    </p>
                    <div className='footer__infoContent'>
                        <p>Amazon Business Card </p>
                        <p>Shop with Points</p> 
                        <p>Reload Your Balance</p>
                        <p>Reload Your Balance</p>
                        <p>Amazon Currency Converter</p>
                    </div>
                </div>
                <div className='footer__info'>
                    <p className='footer__infoTitle'>
                        Let Us Help You
                    </p>
                    <div className='footer__infoContent'>
                        <p>Amazon and COVID-19</p>
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Your Orders</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Returns & Replacements</p>
                        <p>Manage Your Content and Devices</p>
                        <p>Amazon Assistant</p>
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
