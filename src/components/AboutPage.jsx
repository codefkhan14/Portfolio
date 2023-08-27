import React from "react";
import "../styles/AboutPage.css";
function AboutPage({cssClass}) {
  return (
    <>
      <div className={`About-page-intro ${cssClass}`}>
       
        <div className="About-page-right">
          <div className="About-page-img-stack">
            <img
              src="https://themewagon.github.io/satner/img/about-us.png"
              alt=""
              width="450px"
              height="450px"
              className="About-page-img"
            />
          </div>
        </div>
        <div className="About-page-left">
          <h2>About me</h2>
        
          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            saepe perspiciatis fuga error reprehenderit cumque soluta
            provclassNameent placeat ratione eius!
<br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam delectus fugit facere recusandae architecto aliquam consequuntur libero dolorum magnam dolores.
          </p>
        <a href="/Project"> <button className={`all-btn ${cssClass}`}>get cv</button></a> 
        </div>

      </div>
    </>
  );
}

export default AboutPage;
