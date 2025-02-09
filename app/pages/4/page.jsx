"use client";
import React, { useEffect, useState, useRef } from "react";
import Main from "@/app/components/Main";
import "./css.css";
import Input from "./Input";
import Joined from "./Joined";
import Image from "next/image";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    last: "",
    mail: "",
    about: "",
  });

  const [resultData, setResultData] = useState([])
  const fromRef = useRef(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/pages/4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log("Respuesta del servidor:", result);
      setResultData(result.message);
      // Limpiar los campos del formulario después de enviar
      setFormData({ name: "", last: "", mail: "", about: "" });

    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages/r4`)
      .then((response) => response.json())
      .then((data) => {
        setResultData(data);
      });
  }, []);

  return (
    <Main title="Admisión para Larc War" className="cont__pages">
      <div className="f4">
        <div className="f4__form-content">
          <Image src="/img/1.png" width={200} height={200} alt="Admisión Larc War"/>
          {/* Formulario */}
          <form className="f4__form" onSubmit={handleSubmit} ref={fromRef}>
            <Input id="name" name="name" onChange={handleChange} value={formData.name}>Nombre</Input>
            <Input id="last" name="last" onChange={handleChange} value={formData.last}>Apellido</Input>
            <Input id="mail" name="mail" onChange={handleChange} value={formData.mail}>Correo</Input>
            <Input id="about" name="about" onChange={handleChange} value={formData.about}>Asunto</Input>
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className="f4__response-content">
          <h2>Usuarios registrados</h2>
          <div className="f4__response">
            {resultData.map((info, i) => (
              <Joined key={i} data={info} />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
}
