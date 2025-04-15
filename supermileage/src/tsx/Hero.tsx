// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="h-screen bg-cover bg-center bg-black/80 text-white flex items-center justify-center relative" style={{ backgroundImage: "url('/media/images/default.jpg')" }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 text-center px-4">
        <Image src="/media/images/ubc-logo.svg" alt="UBC logo" width={75} height={75} className="mx-auto mb-6" />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-wider uppercase">Supermileage</h1>
        <p className="mt-4 text-xl italic">in the pursuit of efficiency</p>
        <Link href="#about" className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
          Learn More
        </Link>
      </div>
    </header>
  );
}
