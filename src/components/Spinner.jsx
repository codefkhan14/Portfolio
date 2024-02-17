import React from "react";
import Loader from "../spinner.gif";
import "../styles/Spinner.css";
function Spinner({ cssClass }) {
  return (
    <div className={`spinner ${cssClass}`}>
      <img src={Loader} alt="error" className="spinner-img" />
      <span>Loading...</span>
    </div>
  );
}

export default Spinner;
