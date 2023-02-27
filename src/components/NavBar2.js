import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {FiTruck} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {AiTwotoneHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../image/logo.png'
const NavBar2 = () => {

    const [selectCategories,SetSelectCategories] = useState("All Categories")
    const [categories,setCategories] = useState([
        {
            id:1,
            cate:"All Categories",
            shop:"Shop"
        },
        {
            id:1,
            cate:"Group company",
            shop:"ShopGrid-leftSider"

        },
        {
            id:1,
            cate:"Has Technology",
            shop:"ShopGrid-leftSider"

        },
        {
            id:1,
            cate:"Group company",
            shop:"ShopGrid-leftSider"

        },
        {
            id:1,
            cate:"Has Technology",
            shop:"ShopGrid-leftSider"

        }
    ])
  return (
    <>
    <div className='topnav'>
        <span>Welcome to Fasion Store</span>
        <FiTruck className='truck-icons' size={15}/>
        <span>Track Your Orders</span>
        
    </div>
   
    
    <div className='navbar2'>
        <img src={logo} alt='logo'/>
        <div className='searchBox'>
        <select className='section' onChange={(event)=>{
            SetSelectCategories(event.target.value)
        }}>
            
            {categories && categories.length >0 &&
                categories.map((categories)=>{
                    return(<option>{categories.cate}</option>)
                })
            }
        </select>
        <input text="seaach"
        placeholder='Search your products.....'
        />
        <span className="search-icon"><FaSearch /></span>
        </div>

        <div className='icons'>
           <div>
           <CgProfile size={25}/>
           </div>
           <div>
            <AiTwotoneHeart size={25}/>
           </div>
           <div>
            <AiOutlineShoppingCart size={25}/>
           </div>
        </div>
    </div>
    </>
  )
}

export default NavBar2