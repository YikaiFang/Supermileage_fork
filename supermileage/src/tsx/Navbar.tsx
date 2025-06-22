"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true); // ensure hydration match

    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarBgClass = !hasMounted || !scrolling ? "bg-transparent" : "bg-blue-950";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 transition-colors duration-300 ${navbarBgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/media/images/ubcst-logo-inverted.png"
                width={200}
                height={200}
                className="inline-block align-middle"
                alt="Brand Logo"
                priority
              />
            </div>
          </a>

          <button
            className="lg:hidden text-white focus:outline-none rounded-md p-2"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden lg:flex items-center space-x-8">
            {["about", "competition", "blog", "teams", "join", "sponsor"].map((section) => (
              <li key={section}>
                <a
                  className="text-white uppercase hover:text-gray-300 transition-colors duration-200 !no-underline"
                  href={`/sections/${section}`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <ul className="py-2">
            {["about", "competition", "blog", "teams", "join", "sponsor"].map((section) => (
              <li key={section}>
                <a
                  className="block text-white uppercase hover:text-gray-300 transition-colors duration-200 py-2 !no-underline"
                  href={`/sections/${section}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
