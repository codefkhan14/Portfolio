import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutPanel from "../components/AboutPanel";
import Footer from "../components/Footer";
import CopyRightBar from "../components/CopyRightBar";
import AnyIdea from "../components/AnyIdea";
import SkillPanel from "../components/SkillPanel";
import Service from "../components/Service";
import Spinner from "../components/Spinner";
function Skills() {
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
           <AboutPanel title="SKILLS" />
         <SkillPanel />

      <Service/>
       <AnyIdea />
      <Footer />
     <CopyRightBar />
        </div>
      )}
    </div>
  );
  //   <>
  //     <Navbar />
  //     <AboutPanel title="SKILLS" />
  //     <SkillPanel />

  //     <Service/>
  //     <AnyIdea />
  //     <Footer />
  //     <CopyRightBar />
  //   </>
  // );
}

export default Skills;
