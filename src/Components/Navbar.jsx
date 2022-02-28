import React from "react";
import logo from "./Espero_logo.png"


const Navbar = () => {
    return ( 
    <div className="navbarContainer">
        <div className="logoImg w-40">
            <img src={logo} alt=""/>
        </div>
    </div> 
    );
}
 
export default Navbar;