import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import Subscribe from "../components/Subscribe";
import AnyIdea from "../components/AnyIdea";
import ProjectPanel from "../components/ProjectPanel";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";

function Project({ onButtonClick, cssClass }) {
  const location = useLocation();
  if (location.pathname === "/Project") document.title = "Projects - Furkan";

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
          <Navbar cssClass={cssClass} onButtonClick={onButtonClick} />
          <Spinner cssClass={cssClass} />
        </div>
      ) : (
        <div>
          <Navbar onButtonClick={onButtonClick} />
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
