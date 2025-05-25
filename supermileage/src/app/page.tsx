"use client"
import Navbar from "tsx/Navbar";
import Footer from "tsx/Footer";
import Hero from "tsx/Hero";
import About from "tsx/About";
import Cars from "tsx/Cars";
import Sponsors from "tsx/Sponsors";


export default function Home() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section id="start">
        <main id="main">
          <section id="about">
            <About />
          </section>

          <section id="cars">
            <Cars />
          </section>

          <section id="sponsors">
            <Sponsors />
          </section>
        </main>
      </section>
      <Footer/>
    </div>
  );
};