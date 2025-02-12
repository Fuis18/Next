"use client";
import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { API_URL } from "@/config";
import Project from "./components/Main/Project";


export default function Home() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((response) => response.json())
      .then((data) => {
        setPages(data[0]);
      });
  }, []);

  return (
    <Main title="Todos los Proyectos" className="cont__flex">
      {pages.map((project, i) => (
        <Project key={i} id={i} title={project} />
      ))}
    </Main>
  );
}
