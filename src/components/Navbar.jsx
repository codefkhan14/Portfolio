import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
// import { click } from '@testng-library/user-event/dist/click';
function Navbar({ onButtonClick, cssClass }) {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150
        ? setStickyClass("sticky-nav-come")
        : setStickyClass("");
    }
  };

  const [clickMenu, setClickMenu] = useState(false);
  const ClickMenuIcons = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <>
      <section className={`main-navbar  ${stickyClass}  ${cssClass}`}>
        <h2 className="navbarname">
          <Link to="/">Furkan</Link>
        </h2>

        <div className="main-nav">
          <ul
            className={
              clickMenu
                ? `navbanner ${cssClass} active`
                : `navbanner ${cssClass}`
            }
          >
            <li>
              <Link className="active" to="/">
                Home
              </Link>
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
          <div className={`navIcons ${cssClass}`}>
            <i className="modeIcon" onClick={onButtonClick}>
              {cssClass === "" ?  <BsFillMoonFill/> : <BsFillSunFill/>}
            </i>

            <i className="MenuIcon" onClick={ClickMenuIcons}>
              {clickMenu ? <GrClose /> : <CiMenuFries />}
            </i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
