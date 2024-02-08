// import React from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
// import styled from "styled-components";

// const Header = () => {
//   return (
//     <MainHeader>
//       <NavLink to="/">
//         <img src="./images/logo.png" alt="logo" className="logo" />
//       </NavLink>
//       <Navbar />
//     </MainHeader>
//   );
// };

// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   background-color: ${({ theme }) => theme.colors.bg};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   .logo {
//     height: auto;
//     max-width: 30%;
//   }
// `;

// export default Header;


import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import bike from "../Assets/123.png"; 
import logos from "../Assets/logos.png";

const Header = () => {
  return (
    <header className=" text-white px-12 h-24 flex justify-between items-center">
      <NavLink to="/">
        {/* <img src={logos} width={20} height={200} alt="logo" className="h-auto max-w-30%" /> */}
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
