import React from 'react'
import Footer from 'tsx/Footer';
import Navbar from 'tsx/Navbar';
import Timeline from 'app/sections/about/Timeline';
import Title from 'tsx/Title';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Title imageSrcPath="/media/images/default.jpg" name="ABOUT"/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default About;