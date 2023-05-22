import React from 'react'
import Navbar from '../components/Navbar'
import AboutPanel from '../components/AboutPanel'
import Footer from '../components/Footer'
import CopyRightBar from '../components/CopyRightBar'
import ContactDetail from '../components/ContactDetail'
function Contact() {
  return (
   <>
    <Navbar/>
    <AboutPanel title="Contact us"/>
    <ContactDetail/>
    <Footer/>
    <CopyRightBar/>
   </>
  )
}

export default Contact
