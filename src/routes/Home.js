import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import AnyIdea from '../components/AnyIdea'
import CopyRightBar from '../components/CopyRightBar'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Subscribe from '../components/Subscribe'

function Home() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Service/>
      <AnyIdea/>
      <Subscribe/>
      <Faq/>
      <Footer/>
      <CopyRightBar/>


    </>
  )
}

export default Home
