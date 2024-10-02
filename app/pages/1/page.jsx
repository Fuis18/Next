"use client";
import Main from "@/app/components/Main";
import "./css.css";
import { useState, useEffect } from "react";

export default function Page() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [num3, setNum3] = useState(1);
  const [result, setResult] = useState(1);

  useEffect(() => {
    const leftValue = parseFloat(num1) || 1;
    const rightValue = parseFloat(num2) || 1;
    const downValue = parseFloat(num3) || 1;
    const calculatedResult = (leftValue * rightValue) / downValue;
    setResult(calculatedResult);
  }, [num1, num2, num3]);

  return (
    <Main title="Regla de 3 simple" className="cont__pages">
      <div className="f1">
        <div className="f1__container">
          <input
            onKeyUp={(e) => setNum1(e.target.value)}
            className="f1__input1-left"
            type="number"
            placeholder="1"
          />
          <input
            onKeyUp={(e) => setNum2(e.target.value)}
            className="f1__input1-right"
            type="number"
            placeholder="1"
          />
          <input
            onKeyUp={(e) => setNum3(e.target.value)}
            className="f1__input1-down"
            type="number"
            placeholder="1"
          />
        </div>
        <div className="f1__result">{`Resultado: ${result}`}</div>
      </div>
    </Main>
  );
}
