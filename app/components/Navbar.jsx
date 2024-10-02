"use client"
import '@/public/styles/header.css';
import Home from './NavBar/Home';
import Time from './NavBar/Time';
import Mode from './NavBar/Mode';
import Config from './NavBar/Config';

import { useState, useEffect } from "react";

export default function Navbar() {
  // Inicializar el estado del tema basado en el valor almacenado en localStorage
  const [theme, setTheme] = useState(() => {
    // Obtener el tema guardado en localStorage o usar 'light' por defecto
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Valor por defecto si no se puede acceder a localStorage
  });

  useEffect(() => {
    // Establecer el atributo data-theme en el elemento html según el tema actual
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
