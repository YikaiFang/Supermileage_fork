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
      if (window.scrollY > 200) {
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
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolling ? "bg-dark" : "navbar-transparent"}`}>
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
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarToggleExternalContent">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link white" href="/sections/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="/sections/competition">Competition</a>
            </li>
            <li className="nav-item">
              <a className="nav-link white" href="/sections/blog">Blog</a>
            </li>
            <li className="nav-item white">
              <a className="nav-link white" href="/sections/contact">Contact</a>
            </li>
            <li className="nav-item hover:text-red-50">
              <a className="nav-link white" href="/sections/join">Join</a>
            </li>
            <li className="nav-item">
                <a className="nav-link white" href="/sections/sponsor">Sponsor</a>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;

