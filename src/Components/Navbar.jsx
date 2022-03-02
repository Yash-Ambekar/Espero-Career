import React from "react";
import logo from "./Espero_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../CSS/navbar.css";

const Navbar = () => {
  var phoneNumber= "+91-900564572";
  var emailId="pankajjangir@gmail.com"
  return (
    <div className="flex justify-center sm:justify-around navbarContainer">
      <div className="flex items-center justify-center ml-2 phoneEmail">
        <div className="hidden flex sm:relative sm:left-0 sm:mr-4 items-center">
        <i className="text-5xl mr-2 fa fa-mobile"></i>
        {phoneNumber} 
        </div>
        <div className="hidden sm:flex sm:relative items-center ml-2">
        <i className="text-3xl mr-2 fas fa-envelope fa Email"></i>
        <span className="hidden lg:flex">{emailId}</span>
        </div>
      </div>
      <div className="logoImg flex center w-48">
        <img src={logo} alt="Institute Logo" />
      </div>
      <div className='hidden sm:flex sm:items-center text-2xl sm:text-4xl Socials'>
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
