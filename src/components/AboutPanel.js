import React from 'react'
import './AboutPanelStyle.css'
function AboutPanel({title, cssClass}) {
  return (
    <>
    <div className={`top-aboutPanel ${cssClass}`}>

      <div className="aboutPanel">
      <h2>{title}</h2>
    </div>
    </div>
    </>
  )
}

export default AboutPanel
