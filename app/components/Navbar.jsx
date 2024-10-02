"use client"
import '@/public/styles/header.css';
import Home from './NavBar/Home';
import Time from './NavBar/Time';
import Mode from './NavBar/Mode';
import Config from './NavBar/Config';

import { useState, useEffect } from "react";


export default function Navbar() {
  // Cambiar de modo
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

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
        {/* Mode */}
        <Mode toggleTheme={toggleTheme} theme={theme}/>
        {/* Lenguage */}
        <div>ES</div>
        {/* Config */}
        <Config/>
      </nav>
    </header>
  )
}
