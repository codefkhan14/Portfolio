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

function About() {
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
          <Navbar />
          <Spinner />
        </div>
      ) : (
        <div>
          <Navbar />
          <AboutPanel title="ABOUT ME" />
          <AboutPage />
          <Service />
          <Subscribe />
          <AnyIdea />
          <Footer />
          <CopyRightBar />
        </div>
      )}
    </div>
  );
}

export default About;
