import React, { useState } from "react";
import "./NavbarStyle.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
function Navbar() {
  const [clickMode, setModeClick] = useState(false);
  const ClickModeIcons = () => {
    setModeClick(!clickMode);
    
    // light mode 
    // if(!clickMode) 
    // document.body.style = 'background: black;';
    // else 
    // document.body.style = 'background: https://i.stack.imgur.com/HCfU2.png;';
  };


  const [clickMenu, setClickMenu] = useState(false);
  const ClickMenuIcons = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <>
      <section className="main-navbar">
        <h2 className="navbarname">
          <Link to="/">Furkan</Link>
        </h2>

        <div className="main-nav">
          <ul className={clickMenu ? "navbanner active" : "navbanner"}>
            <li>
              <Link className="active" to="/">Home</Link>
            </li>

            <li>
              <Link to="/Project">Projects</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Me</Link>
            </li>
          </ul>
          <div className="navIcons">

            <i className="modeIcon" onClick={ClickModeIcons}>
              
              {clickMode ? <BsFillSunFill /> : <BsFillMoonFill />}

            </i>

            <i className="modeIcon modeMenu" onClick={ClickMenuIcons}>
              
              {clickMenu ? <GrClose /> : <CiMenuFries />}
            </i>
          </div>

        </div>
      </section>
    </>
  );
}

export default Navbar;
