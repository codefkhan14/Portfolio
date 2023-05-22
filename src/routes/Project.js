import React from 'react'
import Navbar from '../components/Navbar'
import AboutPanel from '../components/AboutPanel'
import Footer from '../components/Footer'
import CopyRightBar from '../components/CopyRightBar'
import Subscribe from '../components/Subscribe'
import AnyIdea from '../components/AnyIdea'
import ProjectPanel from '../components/ProjectPanel'
function Project() {
  return (
    <>
       <Navbar/>
    <AboutPanel title="PROJECTS"/>
    <ProjectPanel/>
    <Subscribe/>
    <AnyIdea/>

    <Footer/>
    <CopyRightBar/>
    </>
  )
}

export default Project
