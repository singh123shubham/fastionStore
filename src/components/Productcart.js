import React from 'react'
import image16 from '../image/16.png'
import image17 from '../image/17.png'
import image18 from '../image/18.png'

import { FaStar, FaStarHalfAlt} from 'react-icons/fa'
import {FiHeart} from 'react-icons/fi' 
import {AiOutlineShoppingCart} from 'react-icons/ai'

const products =[
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
        image: image17,
        rating: 4
    },
    {
        id: 1,
        name: "Jacket,Women",
        price: "Rs:9.99",
        description: "Lorem ipsum dolor sit amet",
        image: image17,
        rating: 4
    },
    {
        id: 1,
        name: "Jacket,Women",
        price: "Rs:9.99",
        description: "Lorem ipsum dolor sit amet",
        image: image17,
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
        image: image17,
        rating: 4.5
    },
    {
        id: 1,
        name: "Jacket,Women",
        price: "Rs:9.99",
        description: "Lorem ipsum dolor sit amet",
        image: image18,
        rating: 4
    },
]
const Productcart = () => {

   

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
        <div className='heading'>
        <h1>Summer Collection</h1>
        </div>
    <div className='cart-section'>
        {products.map((product)=>(
          <div className='cart-items'>
              <div>
                <div className='cart-icons'>
             <AiOutlineShoppingCart size={25}/>
             <FiHeart size={25}/>
         </div>
         <div className='cart-image'>    
             <img src={product.image} alt='image'/>  
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
    </>
  )
}

export default Productcart
