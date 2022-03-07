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
    <Fade>
      {fadeImages.map((fadeImageURL) => (
        <div className="each-fade">
          <div className="flex justify-center image-container">
            <img src={fadeImageURL} alt="Hello" className="images w-full" />
          </div>
        </div>
      ))}
    </Fade>
  );
};

export default Slideshow;
