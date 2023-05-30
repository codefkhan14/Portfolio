import React from "react";
import "./AboutPage.css";
function Intro() {
  return (
    <>
      <div className="intro">
       
        <div className="right">
          <div className="img-stack">
            <img
              src="https://themewagon.github.io/satner/img/about-us.png"
              alt=""
              width="450px"
              height="450px"
              className="img"
            />
          </div>
        </div>
        <div className="left">
          <h2>About me</h2>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            saepe perspiciatis fuga error reprehenderit cumque soluta
            provclassNameent placeat ratione eius!
<br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam delectus fugit facere recusandae architecto aliquam consequuntur libero dolorum magnam dolores.
          </p>
        <a href="/Project"> <button className="all-btn">get cv</button></a> 
        </div>

      </div>
    </>
  );
}

export default Intro;
