import ".././CSS/esperotiles.css";
import img from "./Study-material-transparent.png";
import React from "react";



const Blogtiles = () => {
  
    const docs=[
    {
    
      title: "Best result for KVPY, NTSE, IJSO, Olympiads and Board",
      content:"Consistently high quality results in NTSE, KVPY & board examinations since inception; MHS has also given best results from Sikar in BITSAT, NTSE, KVPY & Boards during last years.",
      img: img,
    },
    {
      title: "Best faculty team",
      content:"With more than 100 full time faculties, faculty team of MATRIX HIGH SCHOOL is an unmatched intellectual pool of mentors for competitive exams with excellent qualification from top Indian Universities such as IIT Kharagpur, IIT Kanpur, IIT Delhi, IIM Ahmedabad & IIM Calcutta.",
      img: img,
    },
    {
      title: "Best Teaching Methodology",
      content:"At MHS, we provide a three layered preparatory schedule to our students to ensure that they excel in both school exams and competitive exams.",
      img: img,
    },
    {
      title: "Advanced digital tools",
      content:"With one of the most advanced players on technology front, MHS offers high quality videos, online tests, personalized analytics, online doubt resolution and seamless parents communication to ensure state-of-the art digital facilities for its students. ",
      img: img,
      
    },
    {
      title: "Comprehensive Study Material",
      content:"The study material that we provide is meticulously prepared by our experts to help students prepare subjectively for their exams. Our study material will help you crack any question.",
      img: img,
      
    },
    {
      title: "Compulsory Pre-foundation program",
      content:"NTSE and Olympiad preparation along with compulsory pre-foundation program. MHS is well known name in Sikar for pre-foundation. MHS has given the best board result along with JEE, NEET, NTSE, KVPY, IJSO, NSO, PRMO, RMO and other olympiads due to the compulsory pre-foundation.",
      img: img,
      
    },

  ];

  return  (
    
    <div className="flex w-full justify-center">
      
    <div className={`md:items-center md:justify-center xl:columns-3 lg:columns-3 md:columns-2 grid-container`}>
      
      {docs.map((doc,index) => {
   
        return ( 
          <div className="grid-item" key={index}>
              <div className="blogInfo">
                <h4 className="text-center blogTitle">{doc.title}</h4>
                <hr className="lineSpace" />
              </div>
              <p className={`min-h-[150px] leading-7 overflow-hidden block text-ellipsis break-words blogDescription`}>
                {doc.content}
              </p>
              <div className="flex w-full justify-center"> 
              <img className="w-[100px] flex " src={doc.img} alt="Image" />          
              </div>  
          </div>
        );
      })}
    </div>
    </div>
    
  );
};

export default Blogtiles;
