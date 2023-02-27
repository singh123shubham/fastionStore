import React, { useState } from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaArrowCircleUp } from 'react-icons/fa';
import logo from '../image/logo.png'
const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
    <hr></hr>
    <footer>
        <div className='footer-1'>
            <h4>About Us</h4>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>

        </div>

        <div className='footer-1'>
            <h4>Services</h4>
            <p>Sps Center</p>
            <p>Body Massage for Men</p>
            <p>Female to Male Massage</p>
            <p>Massage</p>
            <p>Deep Tissue</p>
        </div>

        <div className='footer-1'>
            <h4>Others</h4>
            <p>Swedish Massage</p>
            <p>Oil Massage</p>
            <p>Full Body Massage</p>
            <p>Swedish Massage</p>
            <p>Thai Massage</p>
        </div>

        <div className='footer-1'>
            <h4>Contact Us</h4>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>

        </div>

        <div className='footer-5'>
            <img src={logo} alt='logo' />
            <div className='footer-logo'>
            <BsInstagram/>
            <BsInstagram/>
            <BsInstagram/>
            <BsInstagram/>
            </div>

        </div>

    
      {isVisible && (
        <button id="scroll-to-top" onClick={scrollToTop}>
          <FaArrowCircleUp size={30} />
        </button>
      )}


    </footer>
    </>
  )
}

export default Footer