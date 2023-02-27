import React from 'react'
import { GiFireShield } from "react-icons/gi";
import {HiOutlineTruck} from 'react-icons/hi';
import {FaWallet} from 'react-icons/fa';
import {RiCustomerService2Line} from "react-icons/ri"
import image1 from "../image/1.png"
import image2 from '../image/2.png'
import image3 from '../image/3.png'
const NewCollection = () => {
  return (
    <>
    <div className='service'>
        <div className='service-1'>
            <div>
            <GiFireShield  size={30}/>
            </div>
            <div>
            <p style={{fontSize:15}}>SECURE SHOPPING</p>
            <span style={{fontSize:10}}>Free order over Rs.3000</span>
            </div>
        </div>

        <div className='service-1'>
            <div>
            <FaWallet size={30}/>
            </div>
            <div>
            <p style={{fontSize:15}}>SECURE SHOPPING</p>
            <span style={{fontSize:10}}>Free order over Rs.3000</span>
            </div>
        </div>

        <div className='service-1'>
            <div>
            <HiOutlineTruck size={30}/>
            </div>
            <div>
            <p style={{fontSize:15}}>SECURE SHOPPING</p>
            <span style={{fontSize:10}}>Free order over Rs.3000</span>
            </div>
        </div>

        <div className='service-1'>
            <div>
            <RiCustomerService2Line  size={30} marging-top={5}/>
            </div>
            <div>
            <p style={{fontSize:15}}>SECURE SHOPPING</p>
            <span style={{fontSize:10}}>Free order over Rs.3000</span>
            </div>
        </div>
    </div>
    <div className='newcollection'>
        <div className='newcollection-text'>
            <h3>The New Collection</h3>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
            <br></br>
            <button>View More</button>
        </div>

        <div className='newcollection-image'>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>

        </div>

    </div>
    </>
  )
}

export default NewCollection