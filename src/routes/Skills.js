import React from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import AnyIdea from "../components/AnyIdea";
import SkillPanel from "../components/SkillPanel";
import Service from "../components/Service";
function Skills() {
  return (
    <>
      <Navbar />
      <AboutPanel title="SKILLS" />
      <SkillPanel />

      <Service/>
      <AnyIdea />
      <Footer />
      <CopyRightBar />
    </>
  );
}

export default Skills;
