import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import bike from "../Assets/123.png"; 
import logos from "../Assets/logos.png";

const Header = () => {
  return (
    <header className=" text-semibold px-12 h-24 flex justify-between items-center">
      <NavLink to="/">
        {/* <img src={logos} width={20} height={200} alt="logo" className="h-auto max-w-30%" /> */}
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
