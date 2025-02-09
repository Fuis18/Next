"use client";
import Main from "@/app/components/Main";
import "./css.css";
import { useState, useEffect } from "react";
import Compare from "./Compare";

export default function Page() {
  const [formData, setFormData] = useState([
    {
      left: "",
      right: "",
      id: 1
    },
  ]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setFormData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  useEffect(() => {
    console.log("Datos actualizados:", formData);
  }, [formData]);

  return (
    <Main title="Proporciones" className="cont__pages">
      <div className="f0">
        <Compare mode="block" left="A" right="B" />
        {formData.map((item) => (
          <Compare
            mode="active"
            left={item.left}
            right={item.right}
            onChange={(e) => handleChange(e, item.id)}
            key={item.id}
          />
        ))}
        <Compare
            mode="inactive"
            left={""}
            right={""}
            onChange={(e) => handleChange(e, formData[formData.length -1].id + 1)}
            key={formData[formData.length -1].id + 1}
          />
      </div>
    </Main>
  );
}
