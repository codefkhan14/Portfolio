import React from "react";

import Project from "./routes/Project.js";
import Skills from "./routes/Skills.js";
import Contact from "./routes/Contact.js";
import About from "./routes/About.js";
import Home from "./routes/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skills" element={<Skills />} />
       
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
