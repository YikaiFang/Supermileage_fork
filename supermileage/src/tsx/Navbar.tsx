"use client";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
  
interface NavBarProps {
  imageSrcPath: string;
  navItems: string[];
}

const Navbar: React.FC<NavBarProps> = ({imageSrcPath, navItems }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-black shadow">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Image
            src={imageSrcPath}
            width="150"
            height="150"
            className="d-inline-block align-center"
            alt="Brand Logo"
          />
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

