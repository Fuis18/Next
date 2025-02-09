"use client";
import React, { useEffect, useState } from "react";
import Main from "@/app/components/Main";
import Version from "./Version";
import "./css.css";

export default function Page() {
  const [autor, setAutor] = useState();
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/news")
      .then((response) => response.json())
      .then((data) => {
        setAutor(data.autor);
        setVersions(data.versiones);
      });
  }, []);

  return (
    <Main title="News" className="cont__pages">
      <div className="news">
        <div className="news__autor">Autor: {autor}</div>
        <div className="news__version">
          {versions.map((data, i) => (
            <Version key={i} id={i} data={data} />
          ))}
        </div>
      </div>
    </Main>
  );
}
