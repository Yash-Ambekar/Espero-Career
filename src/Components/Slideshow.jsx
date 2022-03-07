import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../CSS/slideshow.css"

const fadeImages = [
  {
    url: "https://www.matrixhighschool.org/assets/default/images/screen-1600/01.jpg",
  },
  {
    url: "https://www.matrixhighschool.org/assets/default/images/screen-1600/06.jpg",
  },
  {
    url: "https://www.matrixhighschool.org/assets/default/images/screen-1600/04.jpg",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade indicators={true} cssClass="slideShowCustom">
        {fadeImages.map((fadeImage, index) => (
          
          <div className="each-fade" key={index}>
            <div className="flex justify-center image-container">
              <img src={fadeImage.url} alt= "" className="h-[150px] sm:h-[300px] md:h-[350px] w-full images" />
            </div>
          </div>
          
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
