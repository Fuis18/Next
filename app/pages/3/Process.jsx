"use client"
import React, { useState, useEffect, useRef } from "react";

function deepEqual(a, b) {
  // Si son estrictamente iguales, retornamos true.
  if (a === b) return true;

  // Si uno es un array y el otro no, y el array tiene un único elemento,
  // comparamos ese elemento con el otro valor.
  if (Array.isArray(a) && !Array.isArray(b)) {
    return a.length === 1 && deepEqual(a[0], b);
  }
  if (Array.isArray(b) && !Array.isArray(a)) {
    return b.length === 1 && deepEqual(a, b[0]);
  }

  // Si ambos son arrays, los comparamos elemento a elemento.
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Si ambos son objetos (y no null) los comparamos por sus propiedades.
  if (typeof a === 'object' && a !== null &&
      typeof b === 'object' && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  // En todos los demás casos, se consideran diferentes.
  return false;
}

export default function Process({ data }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const resultContainer = containerRef.current;
    // Remover todos los hijos de .result
    while (resultContainer.firstChild) {
      resultContainer.removeChild(resultContainer.firstChild);
    }
    const fragment = document.createDocumentFragment();
    data.map((info, i) => {
      // Trabajar
      if (!deepEqual(info, data[i-1])) {
        // Manejar comas
        // Si info es array y tiene más elementos hacer algo
        let div = document.createElement("DIV");
        div.textContent = `${data.length-1 == i ? "=" : ">"} ${info}`;
        fragment.appendChild(div)
      } else {
      }
    })
    containerRef.current.appendChild(fragment);
  })

  return (
    <div className="f3__process" ref={containerRef}></div>
  );
}
