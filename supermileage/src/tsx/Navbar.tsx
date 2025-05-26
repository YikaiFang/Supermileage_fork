"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };
    setScrolling(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 transition-colors duration-300 ${
        scrolling ? "bg-blue-950" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
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

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950 rounded-md p-2"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <a 
                className="text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200" 
                href="/sections/about"
              >
                About
              </a>
            </li>
            <li>
              <a 
                className="text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200" 
                href="/sections/competition"
              >
                Competition
              </a>
            </li>
            <li>
              <a 
                className="text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200" 
                href="/sections/blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                className="text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200" 
                href="/sections/teams"
              >
                Teams
              </a>
            </li>
            <li>
              <a 
                className="text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200" 
                href="/sections/join"
              >
                Join
              </a>
            </li>
            <li>
              <a 
                className="text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200" 
                href="/sections/sponsor"
              >
                Sponsor
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden !no-underline overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <ul className="py-2">
            <li>
              <a 
                className="block text-white !no-underline uppercase hover:text-gray-300 transition-colors duration-200 py-2" 
                href="/sections/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                className="block !no-underline text-white uppercase hover:text-gray-300 transition-colors duration-200 py-2" 
                href="/sections/competition"
                onClick={() => setIsMenuOpen(false)}
              >
                Competition
              </a>
            </li>
            <li>
              <a 
                className="block !no-underline text-white uppercase hover:text-gray-300 transition-colors duration-200 py-2" 
                href="/sections/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                className="block !no-underline text-white uppercase hover:text-gray-300 transition-colors duration-200 py-2" 
                href="/sections/teams"
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </a>
            </li>
            <li>
              <a 
                className="block !no-underline text-white uppercase hover:text-gray-300 transition-colors duration-200 py-2" 
                href="/sections/join"
                onClick={() => setIsMenuOpen(false)}
              >
                Join
              </a>
            </li>
            <li>
              <a 
                className="block !no-underline text-white uppercase hover:text-gray-300 transition-colors duration-200 py-2" 
                href="/sections/sponsor"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}