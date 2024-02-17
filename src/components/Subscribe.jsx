import React from "react";
import "../styles/Subscribe.css";

function Subscribe({cssClass}) {
  return (
    <>
    

  
<div className={`top-subscribe ${cssClass}`}>
<div className={`subscribe ${cssClass}`}>
    <h2>get update from anywhere</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, hic?
    </p>
    <form>
    
      <div className="pro-subscribe">
        <input type="email" required placeholder="Email" />
      </div>
      <button className="all-btn">Submit</button>
    </form>
  </div>
  </div>
    </>
  );
}

export default Subscribe;
