"use client"
import Header from "tsx/Header";
import Image from "next/image";
import Footer from "tsx/Footer";
import Link from "next/link";
import Hero from "tsx/Hero";
import About from "tsx/About";
import Cars from "tsx/Cars";
import Sponsors from "tsx/Sponsors";



export default function Home() {

  return (
    <div>
      <Header/>
      <header
        className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/media/images/fb_cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>

        <img
          src="/media/images/ubc-logo.svg"
          alt="UBC logo"
          className="relative z-10"
          style={{ height: "75px", marginBottom: "25px" }}
        />
        <h1 className="relative z-10 text-6xl font-bold text-white drop-shadow-lg">
          SUPERMILEAGE
        </h1>
        <p className="relative z-10 text-xl italic text-white drop-shadow-md">
          in the pursuit of efficiency
        </p>
        <a className="relative z-10 btn btn-primary mt-4">Learn More</a>
      </header>
      <main>
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
    </div>
  );
};