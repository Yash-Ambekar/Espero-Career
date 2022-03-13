import React from 'react'
import ".././CSS/about.css"

const About = () => {
    
    let anouncements = [
      {
        description: "Matrix Olympiad Stage-2 results have been declared.  ",
        date: "26th Feb",
      },
      {
        description:
          "Matrix Talent Support Exam - MTSE Stage-2 results have been declared.  ",
        date: "25th Feb",
      },
      {
        description:
          "Yet again, MATRIX has set a new record with exceptional results in STSE 2021: 13 students in the top 10 Ranks in Sikar & 10 students in the top 10 Ranks in Rajasthan, i.e. Highest in Sikar + Rajasthan . ",
        date: "24th Feb",
      },
      {
        description:
          "Matrix Talent Support Exam - MTSE Stage-1, Phase-2 (Exam held on 23rd Jan 2022) results have been declared. ",
        date: "23th Feb",
      },
    ];
    


    return (
      <div className="flex justify-evenly items-center justify-center MainDiv">
        <div className=" flex flex-col items-center anouncementsMain">
          <strong> Announcements, News & Updates</strong>
          {anouncements.map((anouncement, index) => {
            return (
              <>
                <div
                  className="w-3/4 p-2 my-2 bg-sky-200 flex items-center text-sm rounded-sm anouncementItems"
                  key={index}
                >
                  {anouncement.description}
                </div>
              </>
            );
          })}
        </div>
        <div className="w-1/2 h-full p-2 flex justify-center aboutMain">
          <div className="flex p-3 w-3/4 bg-sky-200 flex-col items-center rounded-md aboutSection1">
            <strong>Welcome to Espero High School in Sikar</strong>
            <hr className="lineStyleAbout" />
            <p>
              "When students leave the school or college, their entry into the
              real world should be as smooth and easy as possible. At the same
              time, it should have the impact that touches the lives of those
              around them. And finally, it should be so unique that it remains
              marked in the minds of those who reveled in it."
            </p>
            <br />
            <p>
              This is the dream that we at ESPERO High School have for our
              students. Welcome to a new world of opportunities in Sikar now!
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default About;