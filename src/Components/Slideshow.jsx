import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../CSS/slideshow.css";
import storage from "../firebase";

const Slideshow = () => {
  const [images, setImagesURL] = useState([]);

  const handleImages = async () => {
    const fadeImages = [];
    const folderRef = ref(storage, "SlideShow/");
    const result = await listAll(folderRef);

    if (result) {
      for (let itemRef of result.items) {
        const imageURL = await getDownloadURL(
          ref(storage, itemRef._location.path_)
        );
        // console.log(imageURL);
        fadeImages.push(imageURL);
      }
      setImagesURL(fadeImages);
    }

    // console.log(fadeImages, "Before 30");
  };

  useEffect(() => {
    handleImages();
  }, []);

  return (
    <div className="slide-container">
      {images.length > 0 ? (
        <Fade indicators={true} cssClassName="slider">
          {images.map((fadeImage, index) => (
            <div key={index}>
              <div className="flex justify-center image-container">
                <img
                  src={fadeImage}
                  alt={fadeImage}
                  className="h-[150px] sm:h-[300px] md:h-[350px] w-full images"
                />
              </div>
            </div>
          ))}
        </Fade>
      ) : (
        "null"
      )}
    </div>
  );
};

export default Slideshow;
