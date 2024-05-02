import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import Resume from "./MdResume0.0.0.2.pdf";
function Intro({ cssClass }) {
  // window.open(Resume)
  return (
    <>
      <div className={`intro ${cssClass}`}>
        <div className="left">
          <h2>Hey 🖐️! MD FURKAN</h2>
          <h1>
            I am a{" "}
            <span>
              <TypeAnimation
                sequence={[
                  " Full Stack Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Website Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p>
            I'm a passionate Computer Science undergrad aspiring to excel as a
            software developer. With a focus on web development, competitive
            programming, and open source, I'm building a strong foundation.
            Blend technical skills with problem-solving, engage in projects and
            collaboration, and my journey will lead to success.
          </p>
          <Link to="/Contact">
            {" "}
            <button className={`intro-btn all-btn ${cssClass}`}>hire me</button>
          </Link>
          <Link to={Resume} target="_blank" rel="noreferrer">
            {" "}
            <button className={`intro-btn all-btn ${cssClass}`}>get cv</button>
          </Link>
        </div>

        <div className="right">
          <div className="img-stack">
            <img
              src="https://themewagon.github.io/satner/img/banner/home-right.png"
              alt=""
              width="450px"
              height="450px"
              className="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
