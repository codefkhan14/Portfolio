import React from "react";
import Loader from "../spinner.gif";
import "./Spinner.css";
function Spinner() {
  return (
    <div>
      <img src={Loader} alt="error" className="spinner-img" />
    </div>
  );
}

export default Spinner;
