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
          <Navbar onButtonClick={onButtonClick} cssClass={cssClass} />
          <AboutPanel title="PROJECTS" cssClass={cssClass} />
          <ProjectPanel cssClass={cssClass} />
          <Subscribe cssClass={cssClass} />
          <AnyIdea cssClass={cssClass} />
          <Footer cssClass={cssClass} />
          <CopyRightBar cssClass={cssClass} />
        </div>
      )}
    </div>
  );
}

export default Project;
