import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image15 from '../image/15.png'
const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: '',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url:image15,
  },
  {
    url:image15
  },
  {
    url:image15,

  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow