"use client";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
  
interface NavBarProps {
  imageSrcPath: string;
}

const Navbar: React.FC<NavBarProps> = ({imageSrcPath}) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {

    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch(err =>
      console.error("Failed to load Bootstrap JS:", err)
    );

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    if (typeof window !== "undefined") {
      setScrolling(window.scrollY > 200);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolling ? "bg-dark" : "navbar-transparent"}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="logo-container">
            <Image
              src={imageSrcPath}
              width="200"
              height="200"
              className="d-inline-block align-center"
              alt="Brand Logo"
            />
          </div>
        </a>

        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarToggleExternalContent">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link white" href="/sections/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/competition">Competition</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/join">Join</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/sections/sponsor">Sponsor</a>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;

