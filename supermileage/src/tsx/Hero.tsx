// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header
        className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/media/images/fb_cover.jpg')" }}
      >
        <div className="absolute inset-0  bg-gradient-to-b from-black/100 via-black/50 to-transparent"></div>
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
        <a className="relative z-10 btn btn-primary mt-4 js-scroll-trigger" href="#start">Learn More</a>
      </header>
  )
}
