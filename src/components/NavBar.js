import React, { useState } from 'react'
import {VscThreeBars} from 'react-icons/vsc'
const NavBar = () => {

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
    <div className='navbar navbar-fixed'>
    <VscThreeBars size={20}/>
    <select onChange={(event)=>{
            SetSelectCategories(event.target.value)
        }}>
            
            {categories && categories.length >0 &&
                categories.map((categories)=>{
                    return(<option>{categories.cate}</option>)
                })
            }
        </select>

        <h3>Home</h3>

        <select onChange={(event)=>{
            SetSelectCategories(event.target.value)
        }}>
            
            {categories && categories.length >0 &&
                categories.map((categories)=>{
                    return(<option>{categories.shop}</option>)
                })
            }
        </select>

        <h3>Women</h3>
        <h3>Kids</h3>
        <h3>Home Decoration</h3>

    </div>
    </>
  )
}

export default NavBar