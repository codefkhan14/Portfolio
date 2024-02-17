import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import AnyIdea from "../components/AnyIdea";
import CopyRightBar from "../components/CopyRightBar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Subscribe from "../components/Subscribe";
import Spinner from "../components/Spinner";
 
function Home({onButtonClick, cssClass}) {
  
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
          <Spinner cssClass={cssClass}/>
        </div>
      ) : (
        <div>
          <Navbar onButtonClick={onButtonClick} cssClass={cssClass} />
          <Intro cssClass={cssClass} />
          <Service cssClass={cssClass} />
          <AnyIdea cssClass={cssClass} />
          <Subscribe cssClass={cssClass} />
          <Faq cssClass={cssClass}/>
          <Footer cssClass={cssClass}/>
          <CopyRightBar cssClass={cssClass}/>
        </div>
      )}
    </div>
  );
}

export default Home;
