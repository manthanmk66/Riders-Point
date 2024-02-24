import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import bike from "../Assets/123.png";
import logos from "../Assets/logos.png";

const Header = () => {
  return (
    <header className="text-semibold">
      <Navbar />
    </header>
  );
};

export default Header;
