import React from 'react'
import image20 from '../image/20.png'
import Productcart from './Productcart'
import image16 from '../image/16.png'
import image17 from '../image/17.png'
import image18 from '../image/18.png'

import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const products = [
    {
        id: 1,
        name: "Jacket,Women",
        price: "Rs:9.99",
        description: "Lorem ipsum dolor sit amet",
        image: image16,
        rating: 4
    },
    {
        id: 1,
        name: "Jacket,Women",
        price: "Rs:9.99",
        description: "Lorem ipsum dolor sit amet",
        image: image16,
        rating: 4
    },
    {
        id: 1,
        name: "Jacket,Women",
        price: "Rs:9.99",
        description: "Lorem ipsum dolor sit amet",
        image: image16,
        rating: 4
    },   
]

const LatestCollection = () => {

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<FaStar key={i} />);
          } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<FaStarHalfAlt key={i} />);
          } else {
            stars.push(<FaStar key={i} style={{ opacity: 0.5 }} />);
          }
        }
        return stars;
      };
  return (
    <>
    <hr></hr>
    <div className='latestCollection'>
        <div className='latestCollection-left'>
        <div className='cart-section'>
                {products.map((product) => (
                    <div className='latestCollection-items'>
                        <div>
                            <div className='cart-icons'>
                                <AiOutlineShoppingCart size={25} />
                                <FiHeart size={25} />
                            </div>
                            <div className='cart-image'>
                                <img src={product.image} alt='image' />
                            </div>
                            <div className='cart-detail'>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                            </div>
                            <div className='cart-price'>
                                <p>RS:2996</p>
                                <div className='star'>
                                    <div>{renderRatingStars(product.rating)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        <div className='latestCollection-right'>
            <img src={image20} alt='image'/>
        </div>
    </div>
    </>
  )
}

export default LatestCollection