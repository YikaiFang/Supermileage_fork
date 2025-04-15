import Header from "tsx/Header";
import Image from "next/image";
import Footer from "tsx/Footer";
import Link from "next/link";
import Hero from "tsx/Hero";
import About from "tsx/About";
import Cars from "tsx/Cars";
import Sponsors from "tsx/Sponsors";



export default function Home() {
  const navItems = ["About", "Competition", "Blog", "Contact", "Join"]
  return (
    <div>
      {/* <h1>Welcome to the Landing Page</h1> */}
      {/* <Link href="/sections/about">Go to About <br/><br/></Link>
      <Link href="/sections/contact">Go to Contact</Link> */}
      <Header/>
      {/* <Image src="/media/images/default.jpg" alt="" width={1000} height={1000}/> */}
      <Hero />
      <About />
      <Cars />
      <Sponsors />
      {/*<Footer /> no footer yet*/}
    </div>
  );
}

