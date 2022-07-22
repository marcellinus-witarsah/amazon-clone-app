import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg'
                alt=''
                />

                <div className='home__row'>
                    <Product
                    id='1' 
                    title='Air Force 1 Traviss Scott'
                    price={400}
                    image='https://images.stockx.com/360/Nike-Air-Force-1-Low-Travis-Scott-Cactus-Jack/Images/Nike-Air-Force-1-Low-Travis-Scott-Cactus-Jack/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606325676'
                    rating={5}
                    />
                    <Product
                    id='2'
                    title='Jordan 1 Retro High Traviss Scott'
                    price={1000}
                    image='https://images.stockx.com/images/Air-Jordan-1-Retro-High-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1608736403'
                    rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                    id='3'
                    title='Nike SB Dunk Low Travis Scott (Regular Box)'
                    price={2000}
                    image='https://images.stockx.com/images/Nike-SB-Dunk-Low-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606325738'
                    rating={5}
                    />
                    <Product
                    id='4'
                    title='Jordan 4 Retro Travis Scott Purple (Friends and Family)'
                    price={34999}
                    image='https://images.stockx.com/images/Air-Jordan-4-Retro-Travis-Scott-Purple-Friends-and-Family-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606344151'
                    rating={5}
                    />
                    <Product
                    id='5'
                    title='Jordan 6 Retro Traviss Scott'
                    price={665}
                    image='https://images.stockx.com/images/Air-Jordan-6-Retro-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1611191963'
                    rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                    id='6'
                    title='Jordan 1 Retro Low OG SP Traviss Scott'
                    price={1428}
                    image='https://images.stockx.com/images/Air-Jordan-1-Retro-Low-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606317345'
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
