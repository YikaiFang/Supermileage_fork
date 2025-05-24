import React from 'react'
import Footer from 'tsx/Footer';
import Header from 'tsx/Header';
import Timeline from 'tsx/Timeline';

const About = () => {
  return (
    <div>
      <Header/>
      <section>
      <header
        className="relative h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/media/images/img_20190403_180711.jpg')" }}
      >
        <div className="absolute inset-0 bottom-50 bg-gradient-to-b from-black/100 via-black/45 to-transparent"></div>
        <h1 className="relative z-10 text-6xl font-bold text-white drop-shadow-lg">
          HISTORY
        </h1>
        <p className="relative z-10 text-xl italic text-white drop-shadow-md">
          in the pursuit of efficiency
        </p>
      </header>
      </section>
      <Timeline/>
      <Footer/>
    </div>
  )
}

export default About;