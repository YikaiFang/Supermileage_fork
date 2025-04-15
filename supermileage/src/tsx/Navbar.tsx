"use client";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
// import 'css/components/Navbar.css';
  
interface NavBarProps {
  imageSrcPath: string;
}

const Navbar: React.FC<NavBarProps> = ({imageSrcPath}) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolling ? "navbar-solid" : "navbar-transparent"}`}>
      <div className="container">
        <a className="navbar-brand">
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
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/sections/about" style={{color: "white"}}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/competition" style={{color: "white"}}>Competition</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/blog" style={{color: "white"}}>Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/contact" style={{color: "white"}}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sections/join" style={{color: "white"}}>Join</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/sections/sponsor" style={{color : "white"}}>Sponsor</a>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;

