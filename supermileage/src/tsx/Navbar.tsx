"use client";

// import '../css/components/Navbar.css';
// import { useEffect, useState } from 'react';
// import { usePathname } from "next/navigation";

// interface NavBarProps {
  //   imageSrcPath: string;
  //   navItems: string[];
  // }
  
  
  // function Navbar({imageSrcPath, navItems }: NavBarProps) {
    
  //   // const router = useRouter();
  //   const [selectedIndex, setSelectedIndex] = useState(-1);
  
  //     // Load Bootstrap JS only on the client side
//     useEffect(() => {
  //       import("bootstrap/dist/js/bootstrap.bundle.min")
  //         .then(() => console.log("Bootstrap JS loaded"))
  //         .catch((err) => console.error("Bootstrap failed to load", err));
  //     }, []);
  
  //   return (
//     <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
//       <div className="container-fluid">
//         <a className="navbar-brand">
//           <Image
//             src={imageSrcPath}
//             width="150"
//             height="150"
//             className="d-inline-block align-center"
//             alt=""
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarResponsive"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//         <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarResponsive">
//           <ul className="navbar-nav text-uppercase ml-auto">
//             {navItems.map((items, index) => (
  //               <li key={items} className="nav-item">
  //               <li
  //                 key={items}
  //                 className="nav-item"
//                 onClick={() => setSelectedIndex(index)}
//               >
//                 <a
//                   className={
  //                     selectedIndex == index
  //                       ? "nav-link active fw-bold"
  //                       : "nav-link"
  //                   }
  //                   href="#"
  //                 >
  //                 {items}
  //               </a>
  //             </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // }
  
  
  // export default Navbar;
  
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import Link from "next/link";
  
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className="nav-link" href={`/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

