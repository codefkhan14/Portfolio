import React from 'react'
import Navbar from '../components/Navbar'
import AboutPanel from '../components/AboutPanel'
import AboutPage from '../components/AboutPage'
import Service from '../components/Service'
import Footer from '../components/Footer'
import CopyRightBar from '../components/CopyRightBar'
import Subscribe from '../components/Subscribe'
import AnyIdea from '../components/AnyIdea'

function About() {

  return (
    <>
    
    <Navbar />
    <AboutPanel title="ABOUT ME"/>
    <AboutPage/>
    <Service/>
    <Subscribe/>
    <AnyIdea/>
    <Footer/>
    <CopyRightBar/>
    </>
  )
}

export default About
