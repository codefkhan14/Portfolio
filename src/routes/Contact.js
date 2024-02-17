import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import ContactDetail from "../components/ContactDetail";
import Spinner from "../components/Spinner";
function Contact({onButtonClick, cssClass}) {
  const [load, setLoad] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  });
  return (
    <div>
      {load ? (
        <div>
          <Navbar cssClass={cssClass} onButtonClick={onButtonClick}/>
          <Spinner cssClass={cssClass} />
        </div>
      ) : (
        <div>
          <Navbar cssClass={cssClass} onButtonClick={onButtonClick}/>
          <AboutPanel title="Contact us" cssClass={cssClass}/>
          <ContactDetail cssClass={cssClass}/>
          <Footer cssClass={cssClass}/>
          <CopyRightBar cssClass={cssClass}/>
        </div>
      )}
    </div>
  );
}

export default Contact;
