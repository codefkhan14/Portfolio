import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import AnyIdea from "../components/AnyIdea";
import SkillPanel from "../components/SkillPanel";
import Service from "../components/Service";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";
function Skills({ onButtonClick, cssClass }) {
  const [load, setLoad] = useState(true);
  const location = useLocation();
  if (location.pathname === "/Skills") document.title = "Skills - Furkan";

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
          <AboutPanel title="SKILLS" cssClass={cssClass} />
          <SkillPanel cssClass={cssClass} />

          <Service cssClass={cssClass} />
          <AnyIdea cssClass={cssClass} />
          <Footer cssClass={cssClass} />
          <CopyRightBar cssClass={cssClass} />
        </div>
      )}
    </div>
  );
}

export default Skills;
