import React from "react";
import "./IntroStyle.css";
import { Link } from "react-router-dom";
function Intro(props) {
  return (
    <>
      <div className= "intro">
        <div className="left">
          <h2>Hey 🖐️! MD FURKAN</h2>
          <h1>
            I am a <span>Full Stack Developer</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            saepe perspiciatis fuga error reprehenderit cumque soluta
            provclassNameent placeat ratione eius!
          </p>
        <Link to="/Contact"> <button className="intro-btn">hire me</button></Link> 
        <Link to="/Project"> <button className="intro-btn">get cv</button></Link> 
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
