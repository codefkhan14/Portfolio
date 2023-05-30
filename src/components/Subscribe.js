import React from "react";
import "./SubscribeStyle.css";

function Subscribe() {
  return (
    <>
 <div className="subscribe">
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
    </>
  );
}

export default Subscribe;
