
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import logos from "../Assets/logos.png";
import { useCurrentUser } from "../userContext";



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useCurrentUser();

  return (
    <nav className="pt-1 pb-1 shadow flex justify-between items-center z-50 font-roboto  text-black font-semibold ">
      {/* Logo */}
      <NavLink to="/" >
        <img src={logos} style={{ height: "100px" }} alt="logo" />
      </NavLink>

      {/* Menu Items */}
      <ul className={`lg:flex ${openMenu ? "block" : "hidden"} lg:items-center lg:justify-end gap-6 text-3xl mr-5`}>
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
            Gallery
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
        {/* <li className="mb-4 lg:mb-0">
          <NavLink
            className="text-gray-800 font-inter hover:text-gray-600 transition duration-300 ease-in-out"
            onClick={() => setOpenMenu(false)}
            to="/events"
          >
            Events
          </NavLink>
        </li> */}
        <li className="mb-4 lg:mb-0">
          {currentUser ?

            <NavLink
              className="bg-blue-500  font-interbg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"

              onClick={() => {
                setOpenMenu(false);
                //we can call api to login else simply remove token from storage
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}

            >
              Logout
            </NavLink>
            :
            <NavLink
              className="bg-blue-500  font-interbg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"

              onClick={() => setOpenMenu(false)}
              to="/register"
            >
              Signup
            </NavLink>
          }
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




export default Navbar;
