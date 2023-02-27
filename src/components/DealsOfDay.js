import React from 'react'
import image7 from "../image/7.png"


const DealsOfDay = () => {
  return (
    <>
    <div className='dealofday'>
        <div className='dealofday-left-section'>
            <p> Hurry of and get 25% Discount</p>
            <h1>Deals of the Day</h1>
            <span>
            Lorem Ipsum is simply dummy text of the <br></br>printing and typesetting industry. Lorem Ipsum has been the <br></br>industry's standard dummy text ever since the 1500s,
            </span>
            <div className='dealofday-left-section-time'>
                <div className='day'>
                    <h2>35</h2>
                    <p>Days</p>
                </div>

                <div className='day'>
                    <h2>35</h2>
                    <p>Days</p>
                </div>

                <div className='day'>
                    <h2>35</h2>
                    <p>Days</p>
                </div>

                <div className='day'>
                    <h2>35</h2>
                    <p>Sec</p>
                </div>
            </div>
        </div>

        <div className='dealofday-right-section'>
            <img src={image7} alt='image'/>
        </div>
    </div>
    </>
  )
}

export default DealsOfDay