import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
      <nav className="navbar  fixed-top header ">
        <div className="img">
          <img src="./img/logo3.png" />
        </div>
        <div
        className="headername"
          style={{
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Foodies Hub
        </div>
        <NavLink to="/menu" >
          <div className="chat">
         Menu
        </div>
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
