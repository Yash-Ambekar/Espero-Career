import React from "react";
import logo from "./Espero_logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center navbarContainer">
      <div className="logoImg w-48">
        <img src={logo} alt="Institute Logo" />
      </div>
    </div>
  );
};

export default Navbar;
