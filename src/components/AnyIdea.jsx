import React from "react";
import "../styles/AnyIdea.css";
import { Link } from "react-router-dom";
function AnyIdea({cssClass}) {
  return (
    <>
      <div className={`anyidea ${cssClass}`}>
        <div className="idea-imgg">
          <img
            src="https://themewagon.github.io/satner/img/banner/home-right.png"
            alt=""
            className="idea-img"
          />
        </div>
        <div className="idea-details">
          <h3>Have Any Project In Your Mind </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            hic illo ullam architecto quibusdam!
          </p>
        <Link to="/Contact"><button className={`all-btn ${cssClass}`}>contact me</button></Link>  
        </div>
      </div>
    </>
  );
}

export default AnyIdea;
