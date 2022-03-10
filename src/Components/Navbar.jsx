import React from "react";
import logo from "./Espero_logo_5.0.png";
import "../CSS/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { click } from "@testing-library/user-event/dist/click";


const NavigationBar = () => {
  var phoneNumber= "+91-900564572";
  var emailId="pankajjangir@gmail.com";
  
  
  // const showDropdown = (key)=>{
   
  //   console.log(key);
  //   let obj1=navElement[key];
  //   obj1.show=true;
  //   console.log(obj1);
  // }
  // const hideDropdown = (key) => {
    
  //   console.log(key);
  //   let obj1=navElement[key];
  //   obj1.show=false;
  //   console.log(obj1);
  // }
  
  let navElement=[
    {
      element: "About Espero",
      subelements:["Our Vision", "Our message from Managing Committee"],
      
    },
    {
      element: "Admissions",
      subelements:["Apply for Admission", "Rules and Regulation"],
      
    },
    {
      element: "Why Espero",
      subelements:["Best Faculty team", "Espero Online and Video Labs", "Trust of Espero System", "Outstanding Teaching Methodology"],
      
    },
    {
      element: "Results",
      subelements:["12th Board Exam Results", "10th Board Exam Results"],
      
    },

  ];
  

  

  return (
    <div className="flex items-center bg-cyan-100 navbarContainer">
      <div className="hidden lg:flex lg:flex-col lg:justify-center ml-4 rounded-sm bg-cyan-500/50 phoneEmail">
        <div className="hidden md:flex md:items-center md:ml-1">
        <i className="text-5xl mr-2 fa fa-mobile"></i>
        <span className="hidden lg:flex font-bold">{phoneNumber}</span> 
        </div>
        <div className="hidden md:ml-1 md:mr-2 md:flex sm:relative items-center">
        <i className="text-3xl mr-2 fas fa-envelope fa Email"></i>
        <span className="hidden font-bold lg:flex">{emailId}</span>
        </div>
      </div>
    <div className="flex flex-col md:flex-row"> 
      <div className="logoImg flex center ml-4 w-36">
        <img src={logo} alt="Institute Logo"/>
      </div>
  <Navbar bg="transparent" className="text-lg md:flex">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/" className="mr-5 font-bold nav-link">Home</Nav.Link>
      {navElement.map((variable, index)=>(
        
        <NavDropdown className="mr-5 font-bold" title={variable.element} id="navbarScrollingDropdown" key={index} >
          {variable.subelements.map((dropdown,index)=>(
          <NavDropdown.Item  className="bg-blue-200" key={index}>{dropdown}</NavDropdown.Item>
          ))}
        </NavDropdown>))  
        
      }
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
</div> 
      <div className='flex absolute right-3 bg-cyan-500/50 rounded-sm text-2xl sm:text-2xl Socials'>
                    <div className='whatsapp ml-2 mr-2'>
                    <a className="fab fa-whatsapp Link" href="https://wa.me/917021938092" target="_blank"></a>
                    </div>
                    <div className='Instagram mr-2'>
                    <a className="Link fab fa-instagram"></a>                   
                    </div>
                    <div className='Twitter mr-2'>
                    <a className="Link fab fa-twitter"></a>                   
                    </div>
                    <div className='Facebook mr-2'>
                    <a className="Link fab fa-facebook"></a>
                    </div>
      </div>
    </div>
  );
};

export default NavigationBar;
