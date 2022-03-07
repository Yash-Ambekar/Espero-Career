import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../CSS/slideshow.css";
import storage from "../firebase";

const fadeImages = [""];

const handleImages = async (data) => {
  const folderRef = ref(storage, "SlideShow/");
  // console.log(folderRef);
  const result = await listAll(folderRef);

  result.items.forEach((itemRef) => {
    console.log(itemRef);
    // setImages(itemRef._location.path_).then((res) => console.log(res));
    setImages(itemRef._location.path_).then((res) => {
      fadeImages.push(res);
    });
  });
  // fadeImages.push(itemRef._location.path_);

  console.log(fadeImages);
};

const setImages = async (imageURL) => {
  return await getDownloadURL(ref(storage, imageURL));
};

const Slideshow = () => {
  useEffect(() => {
    handleImages();
  }, []);

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
