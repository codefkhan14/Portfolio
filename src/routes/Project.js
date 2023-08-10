import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import Subscribe from "../components/Subscribe";
import AnyIdea from "../components/AnyIdea";
import ProjectPanel from "../components/ProjectPanel";
import Spinner from "../components/Spinner";

function Project() {
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
          <AboutPanel title="PROJECTS" />
          <ProjectPanel />
          <Subscribe />
          <AnyIdea />
          <Footer />
          <CopyRightBar />
        </div>
      )}
    </div>
  );
}

export default Project;
