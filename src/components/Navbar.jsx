import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
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
  const [activeClass, setActiveClass] = useState("home");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Skills") setActiveClass("skill");
    if (location.pathname === "/Project") setActiveClass("project");
    if (location.pathname === "/Contact") setActiveClass("contact");
    if (location.pathname === "/About") setActiveClass("about");
    if (location.pathname === "/") setActiveClass("home");
  }, [activeClass]);

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
              <Link
                // className="active"
                className={activeClass == "home" ? "active" : ""}
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Project"
                className={activeClass == "project" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/Skills"
                className={activeClass == "skill" ? "active" : ""}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={activeClass == "about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={activeClass == "contact" ? "active" : ""}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className={`navIcons ${cssClass}`}>
            <i className="modeIcon" onClick={onButtonClick}>
              {cssClass === "" ? <BsFillMoonFill /> : <BsFillSunFill />}
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
