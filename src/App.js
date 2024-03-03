import React, { useState } from "react";

import Project from "./routes/Project.js";
import Skills from "./routes/Skills.js";
import Contact from "./routes/Contact.js";
import About from "./routes/About.js";
import Home from "./routes/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cssClass, setCssClass] = useState(""); // State to hold the CSS class

  const handleButtonClick = () => {
    if (cssClass === "") setCssClass("darkCss");
    else setCssClass("");
  };
  return (
    <>
      <BrowserRouter>
        {/* <BrowserRouter basename="/Portfolio"> */}
        <Routes>
          <Route
            path="/"
            element={
              <Home onButtonClick={handleButtonClick} cssClass={cssClass} />
            }
          />
          <Route
            path="/About"
            element={
              <About onButtonClick={handleButtonClick} cssClass={cssClass} />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact onButtonClick={handleButtonClick} cssClass={cssClass} />
            }
          />
          <Route
            path="/Project"
            element={
              <Project onButtonClick={handleButtonClick} cssClass={cssClass} />
            }
          />
          <Route
            path="/Skills"
            element={
              <Skills onButtonClick={handleButtonClick} cssClass={cssClass} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
