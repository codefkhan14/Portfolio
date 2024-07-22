import React from "react";
import "../styles/Subscribe.css";

function Subscribe({ cssClass }) {
  return (
    <>
      <div className={`top-subscribe ${cssClass}`}>
        <div className={`subscribe ${cssClass}`}>
          <h2>get update from anywhere</h2>
          <p>Stay connected and receive updates from anywhere</p>
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
