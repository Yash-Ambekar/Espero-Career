import React from "react";
import logo from "./Espero_logo_2.0.png";
import "../CSS/navbar.css";

const Navbar = () => {
  var phoneNumber= "+91-900564572";
  var emailId="pankajjangir@gmail.com"
  return (
    <div className="flex navbarContainer">
      <div className="hidden lg:flex lg:flex-col ml-2 phoneEmail">
        <div className="hidden md:flex items-center">
        <i className="text-5xl mr-2 fa fa-mobile"></i>
        <span className="hidden lg:flex">{phoneNumber}</span> 
        </div>
        <div className="hidden md:flex sm:relative items-center">
        <i className="text-3xl mr-2 fas fa-envelope fa Email"></i>
        <span className="hidden lg:flex">{emailId}</span>
        </div>
      </div>
      <div className="logoImg flex center ml-4 w-48">
        <img src={logo} alt="Institute Logo"/>
      </div>
      <div className='flex absolute right-0 items-center mt-4 text-2xl sm:text-3xl Socials'>
                    <div className='whatsapp mr-2'>
                    <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className='Instagram mr-2'>
                    <span className="Instagramlogo fab fa-instagram"></span>                   
                    </div>
                    <div className='Twitter mr-2'>
                    <span className="Twitterlogo fab fa-twitter"></span>                   
                    </div>
                    <div className='Facebook mr-2'>
                    <span className="Facebooklogo fab fa-facebook"></span>
                    </div>
                </div>
    </div>
  );
};

export default Navbar;
