import React from 'react'
import './AboutPanelStyle.css'
function AboutPanel(props) {
  return (
    <>
      <div className="aboutPanel">
      <h2>{props.title}</h2>
    </div>
    </>
  )
}

export default AboutPanel
