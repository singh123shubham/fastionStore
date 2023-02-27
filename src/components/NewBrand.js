import React from 'react'
import image9 from '../image/9.png'
import image10 from '../image/10.png'
import image11 from '../image/11.png'
import image13 from '../image/13.png'
import image12 from '../image/12.png'



const NewBrand = () => {
    return (
        <>
            <div className='newbrand'>
                <div className='newbrand-left'>
                        <img src={image9} alt='image' />
                        <div className='newbrand-text'>
                            <p>sdvkjsf</p>
                            <p>skjfaksj</p>
                        </div>
                </div>
                
                <div className='newbrand-right'>
                        <img src={image10} alt='image' />
                        <div className='newbrand-text'>
                            <p>sdvkjsf</p>
                            <p>skjfaksj</p>
                        </div>
                </div>

                 
                <div className='newbrand-right'>
                        <img src={image11} alt='image' />
                        <div className='newbrand-text'>
                            <p>sdvkjsf</p>
                            <p>skjfaksj</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default NewBrand