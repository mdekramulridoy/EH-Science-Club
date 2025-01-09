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
      <Navbar />
      {theme === "dark" && <div className="stars"></div>}
      <div className="min-h-screen ">
        <Outlet />
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  );
};

export default Root;
