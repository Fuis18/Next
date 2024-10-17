"use client"
import '@/public/styles/header.css';
import Home from './NavBar/Home';
import Time from './NavBar/Time';
import Mode from './NavBar/Mode';
import Newsletter from './NavBar/Newsletter';
import Config from './NavBar/Config';

import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light"); // Default to light

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  // Función para alternar entre los temas claro y oscuro
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header>
      {/* Main */}
      <nav>
        {/* Home */}
        <Home/>
        {/* Time */}
        <Time/>
      </nav>
      {/* Search */}
      <div></div>
      <nav>
        {/* Newsletter */}
        <Newsletter/>
        {/* Mode */}
        <Mode toggleTheme={toggleTheme} theme={theme}/>
        {/* Lenguage */}
        <div>ES</div>
        {/* Config */}
        <Config/>
      </nav>
    </header>
  );
}
