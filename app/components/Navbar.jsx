"use client"
import '@/public/styles/header.css';
import Home from './NavBar/Home';
import Time from './NavBar/Time';
import Mode from './NavBar/Mode';
import Newsletter from './NavBar/News';
import Config from './NavBar/Config';

import { useState, useEffect } from "react";
import Link from "next/link";

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
        <Link href="/" className="home" title="Inicio">
          <Home/>
        </Link>
        {/* Time */}
        <Time/>
      </nav>
      {/* Search */}
      <div></div>
      <nav>
        {/* Newsletter */}
        <Link href="/pages/news/">
          <Newsletter/>
        </Link>
        {/* Mode */}
        <Mode toggleTheme={toggleTheme} theme={theme}/>
        {/* Lenguage */}
        <div>ES</div>
        {/* Config */}
        <Link href="/pages/config/">
          <Config/>
        </Link>
      </nav>
    </header>
  );
}
