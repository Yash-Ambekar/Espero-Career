import React from "react";
import "../CSS/copyright.css";

const Copyright = () => {
  return (
    <div className="CopyrightContainer absolute bottom-0 w-100">
      <span className="m-auto">Copyright © Espero Career Institure</span>
      <span className="hidden sm:flex sm:m-auto">Contact us | Rules and Regulations</span>
    </div>
  );
};

export default Copyright;
