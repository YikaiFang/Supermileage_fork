"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface NavBarProps {
  imageSrcPath: string;
}

const Navbar: React.FC<NavBarProps> = ({ imageSrcPath }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {

    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch(err =>
      console.error("Failed to load Bootstrap JS:", err)
    );

    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ease-in-out z-10000 ${
        scrolling
          ? "bg-blue-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand flex items-center gap-2" href="/">
          <Image
            src={imageSrcPath}
            width={150}
            height={150}
            alt="UBC Supermileage Logo"
            className="d-inline-block align-middle"
            priority
          />
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-end" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase gap-2">
            {[
              ["About", "/sections/about"],
              ["Competition", "/sections/competition"],
              ["Blog", "/sections/blog"],
              ["Contact", "/sections/contact"],
              ["Teams", "/sections/teams"],
              ["Join", "/sections/join"],
              ["Sponsor", "/sections/sponsor"],
            ].map(([title, href]) => (
              <li className="nav-item" key={title}>
                <a
                  className="nav-link text-white hover:text-gray-300 transition"
                  href={href}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
