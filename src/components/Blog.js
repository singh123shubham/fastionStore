import React from 'react'
import blog1 from '../image/4.png'
import blog2 from '../image/5.png'
import blog3 from '../image/6.png'

const Blog = () => {
  
  return (
    <>
    <div className='blog-section'>
        <h1>From The Blog</h1>
        <div className='blog-section-1'>
        <div className='Blog'>
            <img src={blog1} alt='blog'/>
            <br></br>
            <h6>February,03,2023</h6>
            <h6 style={{fontSize:15}}>Meet the women behind cool ethical labours Refor</h6>
            <button>Read More</button>
        </div>

        <div className='Blog'>
            <img src={blog2} alt='blog'/>
            <br></br>
            <h6>February,03,2023</h6>
            <h6 style={{fontSize:15}}>Meet the women behind cool ethical labours Refor</h6>
            <button>Read More</button>
        </div>

        <div className='Blog'>
            <img src={blog3} alt='blog'/>
            <br></br>
            <h6>February,03,2023</h6>
            <h6 style={{fontSize:15}}>Meet the women behind cool ethical labours Refor</h6>
            <button>Read More</button>
        </div>
        </div>
    </div>

    
    </>
  )
}

export default Blog