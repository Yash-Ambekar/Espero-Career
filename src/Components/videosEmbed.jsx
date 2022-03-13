import React from 'react';
import ".././CSS/videosEmbed.css"

const videoEmbed = () => {
    
    let videoLink = [
      {
        url: "https://www.youtube.com/embed/0RRVV4Diomg",
        title: "Chemistry",
      },
      {
        url: "https://youtube.com/embed/Wbf0QwHCdxE",
        title: "Physics",
      },
      {
        url: "https://youtube.com/embed/6i0xgfXXH-o",
        title: "Mathematics",
      },
    ];
    
    return (
      <div className="flex flex-col items-center videoMainDiv">
        <strong className="text-xl mx-3 text-center">
          World Class Features at Espero High School in CHURU, Rajasthan
        </strong>
        <hr className="lineStyle" />
        <div className="flex flex-col my-2 lg:flex-row  justify-center items-center">
          {videoLink.map((link, index) => {
            return (
              <iframe
                key={index}
                className="max-h-[400px] min-h-[200px] min-w-[250px] w-[450px] h-[350px] p-3 bg-sky-200 mx-3 rounded-md"
                src={link.url}
                frameBorder="1"
                allowFullScreen
                title={link.title}
              />
            );
          })}
        </div>
        <hr className='lineStyle'/>
      </div>
    );
}
 
export default videoEmbed;