"use client";
import Main from "@/app/components/Main";
import "./css.css";
import React, { useState, useEffect, useRef } from "react";

export default function Page() {
  const [amount, setAmount] = useState(0);
  const [isListed, setIsListed] = useState(false);
  const [beforeIteration, setBeforeIteration] = useState("");
  const [withNumbers, setWithNumbers] = useState(false);
  const [afterIteration, setAfterIteration] = useState("");
  const [withZeros, setWithZeros] = useState(false);
  const [errors, setErrors] = useState({
    bigAmount: false,
    smallAmount: false,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const validarCantidad = () => {
      if (amount > 45000) {
        setErrors({ bigAmount: true, smallAmount: false });
      } else if (amount < 0) {
        setErrors({ bigAmount: false, smallAmount: true });
      } else {
        setErrors({ bigAmount: false, smallAmount: false });
      }
    };

    validarCantidad();
  }, [amount]);

  const handleNumberToggle = () => {
    setWithNumbers(!withNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultContainer = containerRef.current;

    // Remover todos los hijos de .result
    while (resultContainer.firstChild) {
      resultContainer.removeChild(resultContainer.firstChild);
    }
    if (!errors.bigAmount && !errors.smallAmount && amount > 0) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i <= amount; i++) {
        let answer;
        let div = document.createElement("DIV");
        if (isListed) div.classList.add("div-block");
        else div.classList.add("div-inline");

        if (withNumbers) {
          let d0 = `${beforeIteration}${i}${afterIteration}`;
          let d00 = `${beforeIteration}${i}${afterIteration}`;
          let d000 = `${beforeIteration}${i}${afterIteration}`;
          let d0000 = `${beforeIteration}${i}${afterIteration}`;

          if (withZeros) {
          d0 = `${beforeIteration}0${i}${afterIteration}`;
          d00 = `${beforeIteration}00${i}${afterIteration}`;
          d000 = `${beforeIteration}000${i}${afterIteration}`;
          d0000 = `${beforeIteration}0000${i}${afterIteration}`;
          }

          let i9_i100 = i > 9 && i < 100;
          let i99_i1000 = i > 99 && i < 1000;
          let a99_a1000 = amount > 99 && amount < 1000;
          let l999_l10000 = amount > 999 && amount < 10000;
          let a9999_a100000 = amount > 9999 && amount < 100000;

          if (i < 10 && amount < 100) answer = d0;
          else if (i < 10 && a99_a1000) answer = d00;
          else if (i9_i100 && a99_a1000) answer = d0;
          else if (i < 10 && l999_l10000) answer = d000;
          else if (i9_i100 && l999_l10000) answer = d00;
          else if (i99_i1000 && l999_l10000) answer = d0;
          else if (i < 10 && a9999_a100000) answer = d0000;
          else if (i9_i100 && a9999_a100000) answer = d000;
          else if (i99_i1000 && a9999_a100000) answer = d00;
          else if (i > 999 && i < 10000 && a9999_a100000) answer = d0;
          else answer = beforeIteration + i + afterIteration;
        } else {
          answer = beforeIteration +`&nbsp;`.repeat(i.toString().length) + afterIteration;
        }

        if (!isListed) answer = answer + "&nbsp;";
        div.innerHTML = answer;
        fragment.appendChild(div);
      }

      containerRef.current.appendChild(fragment);
    }
  };
  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setAmount(isNaN(value) ? 0 : value);
  };

  return (
    <Main title="Repetidor" className="cont__pages">
      <form className="f3" onSubmit={handleSubmit}>
        <div>
          Cantidad:
          <input
            type="number"
            className="amount-input"
            onChange={handleAmountChange}
          />
          {errors.bigAmount && (
            <span className="bigAmount-error error-active">
              La cantidad no puede ser mayor a 45000
            </span>
          )}
          {errors.smallAmount && (
            <span className="smallAmount-error error-active">
              La cantidad debe ser mayor a 0
            </span>
          )}
        </div>
        <div>
          En listado:
          <input
            type="checkbox"
            className="listado-input"
            checked={isListed}
            onChange={() => setIsListed(!isListed)}
          />
        </div>
        <div>
          Dato antes de la iteración:
          <input
            type="text"
            className="before-input"
            value={beforeIteration}
            onChange={(e) => setBeforeIteration(e.target.value)}
          />
        </div>
        <div onClick={handleNumberToggle}>
          Con números:
          <div
            className={`numbers-input ${
              withNumbers ? "button-active" : "button-inactive"
            }`}
          />
        </div>
        {withNumbers && (
          <>
            <div className="after">Dato luego de la iteración:</div>
            <input
              type="text"
              className="after-input"
              value={afterIteration}
              onChange={(e) => setAfterIteration(e.target.value)}
            />
            <div className="zeros">
              Con Cero(s) adelante:
              <input
                type="checkbox"
                className="zeros-input"
                checked={withZeros}
                onChange={() => setWithZeros(!withZeros)}
              />
            </div>
          </>
        )}
        <input type="submit" className="submit" value="Enviar" />
      </form>
      <div className="result" ref={containerRef}></div>
    </Main>
  );
}
