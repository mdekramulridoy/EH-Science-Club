import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      createSnowflakes();
    } else {
      removeSnowflakes();
    }

    return () => {
      removeSnowflakes();
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const createSnowflakes = () => {
    const snowflakesContainer = document.createElement("div");
    snowflakesContainer.className = "snowflakes";
    document.body.appendChild(snowflakesContainer);

    for (let i = 0; i < 80; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.width = `${Math.random() * 10 + 5}px`;
      snowflake.style.height = snowflake.style.width;
      snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflakesContainer.appendChild(snowflake);
    }
  };

  const removeSnowflakes = () => {
    const existingSnowflakes = document.querySelector(".snowflakes");
    if (existingSnowflakes) {
      existingSnowflakes.remove();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
