import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeSwitch/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-red-500 bg-white font-semibold hover:text-white" : "text-white"
            }`
          }
        >
          Home
        </NavLink>
        <hr className="border-white my-1" />
      </li>
      <li>
        <NavLink
          to="/tutorials"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-red-500 font-semibold bg-white hover:text-white" : "text-white"
            }`
          }
        >
          Tutorials
        </NavLink>
        <hr className="border-white my-1" />
      </li>
      <li>
        <NavLink
          to="sci-fi"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-red-500 font-semibold bg-white hover:text-white" : "text-white"
            }`
          }
        >
          Sci-Fi
        </NavLink>
        <hr className="border-white my-1" />
      </li>
    </>
  );

  return (
    <div className="sticky top-0 bg-[#FF0000] px-4 lg:px-10 py-2 z-50 shadow-md">
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start ">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="lg:w-32 md:w-16 w-14"
              src="https://i.ibb.co.com/W0K1SC3/yt-new-logo.png"
              alt="EH Science Club Logo"
            />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden md:flex lg:flex">
          <ul className="menu gap-2 menu-horizontal px-1 text-sm">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 ">
          <button
            onClick={toggleTheme}
            className="btn rounded-full btn-ghost text-white border border-white"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className="h-5 w-5"
            />
          </button>

          {/* Mobile Menu */}
          <div className="relative lg:hidden md:hidden ">
            <button
              className="btn btn-ghost"
              tabIndex={0}
              role="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <FontAwesomeIcon icon={faBars} className="h-5 w-5 text-white" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 bg-white text-red z-50 rounded-md shadow-lg transition-transform duration-300 ease-in-out  ${
                isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 "
              }`}
            >
              <ul className="bg-red-500 text-white w-full px-12 py-6 border gap-1 rounded-lg flex flex-col menu menu-horizontal text-center items-center">
                {links}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
