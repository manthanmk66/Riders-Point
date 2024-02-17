// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgCloseR } from "react-icons/cg";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const Nav = styled.nav`
//     .navbar-list {
//       display: flex;
//       gap: 4.8rem;

//       li {
//         list-style: none;

//         .navbar-link {
//           &:link,
//           &:visited {
//             display: inline-block;
//             text-decoration: none;
//             font-size: 1.8rem;
//             text-transform: uppercase;
//             color: ${({ theme }) => theme.colors.black};
//             transition: color 0.3s linear;
//           }

//           &:hover,
//           &:active {
//             color: ${({ theme }) => theme.colors.helper};
//           }
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;

//       .close-outline {
//         display: none;
//       }
//     }

//     .mobile-navbar-btn[name="close-outline"] {
//       display: none;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       /* hide the original nav menu  */
//       .navbar-list {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-content: center;
//         flex-direction: column;
//         text-align: center;

//         transform: translateX(100%);

//         visibility: hidden;
//         opacity: 0;

//         li {
//           .navbar-link {
//             &:link,
//             &:visited {
//               font-size: 4.2rem;
//             }

//             &:hover,
//             &:active {
//               color: ${({ theme }) => theme.colors.helper};
//             }
//           }
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 3%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .active .navbar-list {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//       }
//     }
//   `;

//   return (
//     <Nav>
//       <div className={openMenu ? "menuIcon active" : "menuIcon"}>
//         <ul className="navbar-list">
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/about">
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/service">
//               Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/contact">
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//         {/* //nav icon */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setOpenMenu(true)}
//           />
//           <CgCloseR
//             name="close-outline"
//             className="close-outline mobile-nav-icon"
//             onClick={() => setOpenMenu(false)}
//           />
//         </div>
//       </div>
//     </Nav>
//   );
// };

//export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import logos from "../Assets/logos.png";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="pt-3 shadow lg:px-10 flex justify-between items-center z-50 font-roboto text-black font-semibold ">
      {/* Logo */}
      <NavLink to="/" className="pt-14" style={{ paddingRight: "80rem"}}>
        <img src={logos} width={250} height={250} alt="logo" />
      </NavLink>

      {/* Menu Items */}
      <ul className={`lg:flex ${openMenu ? "block" : "hidden"} lg:items-center lg:justify-end gap-6 text-3xl`}>
        <li className="mb-4 lg:mb-0">
          <NavLink
            className="text-gray-800 hover:text-gray-600 font-inter transition duration-300 ease-in-out"
            onClick={() => setOpenMenu(false)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mb-4 lg:mb-0">
          <NavLink
            className="text-gray-800 font-inter hover:text-gray-600 transition duration-300 ease-in-out"
            onClick={() => setOpenMenu(false)}
            to="/rides"
          >
            Rides
          </NavLink>
        </li>
        <li className="mb-4 lg:mb-0">
          <NavLink
            className="text-gray-800 font-inter hover:text-gray-600 transition duration-300 ease-in-out"
            onClick={() => setOpenMenu(false)}
            to="/service"
          >
            Services
          </NavLink>
        </li>
        <li className="mb-4 lg:mb-0">
          <NavLink
            className="text-gray-800 font-inter hover:text-gray-600 transition duration-300 ease-in-out"
            onClick={() => setOpenMenu(false)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li className="mb-4 lg:mb-0">
          <NavLink
            className="text-gray-800 font-inter hover:text-gray-600 transition duration-300 ease-in-out"
            onClick={() => setOpenMenu(false)}
            to="/events"
          >
            Events
          </NavLink>
        </li>
        <li className="mb-4 lg:mb-0">
          <NavLink
             className="bg-blue-500  font-interbg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          
            onClick={() => setOpenMenu(false)}
            to="/register"
          >
            Signup
          </NavLink>
        </li>
      </ul>

      {/* Nav icon */}
      <div className="lg:hidden">
        {!openMenu ? (
          <CgMenu
            className="text-gray-800 font-mono text-3xl cursor-pointer"
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <CgCloseR
            className="text-gray-800 font-mono text-3xl cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </div>
    </nav>
  );
};


// export default Navbar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { CgMenu, CgCloseR } from "react-icons/cg";
// import logos from "../Assets/logos.png";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg blur blur-rounded top-0 border-bottom z-index-3 shadow w-100 mt-4 d-none d-lg-block my-3 py-2">
//         <div className="container-fluid">
//           <a className="navbar-brand font-weight-bolder ms-3" href="" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
//             Soft UI Design System
//           </a>
//           <button className="navbar-toggler" type="button" onClick={() => setOpenMenu(!openMenu)}>
//             {openMenu ? (
//               <CgCloseR className="navbar-toggler-icon" />
//             ) : (
//               <CgMenu className="navbar-toggler-icon" />
//             )}
//           </button>
//           <div className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`} id="navigation">
//             <ul className="navbar-nav navbar-nav-hover mx-auto">
//               <li className="nav-item px-3">
//                 <a className="nav-link">
//                   Pages
//                 </a>
//               </li>
//               <li className="nav-item px-3">
//                 <a className="nav-link">
//                   Utilities
//                 </a>
//               </li>
//               <li className="nav-item px-3">
//                 <a className="nav-link">
//                   Blocks
//                 </a>
//               </li>
//               <li className="nav-item px-3">
//                 <a className="nav-link">
//                   Docs
//                 </a>
//               </li>
//             </ul>
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <button className="btn btn-sm bg-gradient-dark btn-round mb-0 me-1">Buy Now</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

export default Navbar;
