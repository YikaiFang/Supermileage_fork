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
      {/* <Image src="/media/images/default.jpg" alt="" width={1000} height={1000}/> */}
      <Hero />
      <About />
      <Cars />
      <Sponsors />
      {/*<Footer /> no footer yet*/}
    </div>
  );
};