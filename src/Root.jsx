import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import "./index.css";
import { useTheme } from "./ThemeSwitch/ThemeContext";

const Root = () => {
  const { theme } = useTheme(); // Theme Context from ThemeContext.jsx

  return (
    <div className={`min-h-screen ${theme === "dark" ? "night-mode" : ""}`}>
      {theme === "dark" && <div className="stars"></div>}
      <Navbar />
      <div className="mt-20 lg:mt-40 px-6 lg:mx-20">
        <Outlet />
      </div>
      <div className="mt-20 lg:mt-40 px-6 lg:mx-20">
      <Footer />
      </div>
    </div>
  );
};

export default Root;
