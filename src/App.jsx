import React, { useState } from "react";

import Project from "./routes/Project.jsx";
import Skills from "./routes/Skills.jsx";
import Contact from "./routes/Contact.jsx";
import About from "./routes/About.jsx";
import Home from "./routes/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop.jsx";

function App() {
  const [cssClass, setCssClass] = useState(""); // State to hold the CSS class

  const handleButtonClick = () => {
    if (cssClass === "") setCssClass("darkCss");
    else setCssClass("");
  };
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
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
