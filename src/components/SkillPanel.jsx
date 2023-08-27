import React from 'react'
import '../styles/SkillPanel.css'
function SkillPanel({cssClass}) {
  return (
    <>
    <div className={`top-skill-panel ${cssClass}`}>
      
        <div className="skill-panel">
    <h2>My Skills</h2>
    <p>These are my skills on the basis of which i have made projects.</p>

      <div className="skill-box">
        <span className="skill-title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per skill-html"><span className="skill-tooltip">95%</span> </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="skill-title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per skill-css"><span className="skill-tooltip">85%</span> </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per skill-javascript"><span className="skill-tooltip">80%</span> </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">React JS</span>
        <div className="skill-bar">
          <span className="skill-per skill-reactjs"><span className="skill-tooltip">80%</span> </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">Node JS</span>
        <div className="skill-bar">
          <span className="skill-per skill-nodejs"><span className="skill-tooltip">70%</span> </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="skill-title">MongoDB</span>
        <div className="skill-bar">
          <span className="skill-per skill-mongodb"><span className="skill-tooltip">75%</span> </span>
        </div>
      </div>

    </div>
    
    </div>
    </>
  )
}

export default SkillPanel
