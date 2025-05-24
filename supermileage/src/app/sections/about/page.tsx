import React from 'react'
import Footer from 'tsx/Footer';
import Header from 'tsx/Header';
import Timeline from 'app/sections/about/Timeline';
import Title from 'tsx/Title';

const About = () => {
  return (
    <div>
      <Header/>
      <Title imageSrcPath="/media/images/img_20190403_180711.jpg" name="History"/>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default About;