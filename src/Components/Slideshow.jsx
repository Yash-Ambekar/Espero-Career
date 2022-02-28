import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: 'https://www.matrixhighschool.org/assets/default/images/screen-1600/01.jpg',
 
  },
  {
  url: 'https://www.matrixhighschool.org/assets/default/images/screen-1600/06.jpg',
  
  },
  {
  url: 'https://www.matrixhighschool.org/assets/default/images/screen-1600/04.jpg',
  
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="flex justify-center image-container">
              <img src={fadeImage.url} className="w-full" />
            </div>
            
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;