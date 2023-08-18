import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import AboutPage from "../components/AboutPage";
import Service from "../components/Service";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import Subscribe from "../components/Subscribe";
import AnyIdea from "../components/AnyIdea";

import Spinner from "../components/Spinner";

function About({onButtonClick, cssClass}) {
 const [load, setLoad] = useState(true)
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
          <Navbar onButtonClick={onButtonClick} cssClass={cssClass}/>
          <AboutPanel title="ABOUT ME" cssClass={cssClass} />
          <AboutPage cssClass={cssClass}/>
          <Service cssClass={cssClass}/>
          <Subscribe cssClass={cssClass}/>
          <AnyIdea cssClass={cssClass}/>
          <Footer cssClass={cssClass}/>
          <CopyRightBar cssClass={cssClass}/>
        </div>
      )}
    </div>
  );
}

export default About;
