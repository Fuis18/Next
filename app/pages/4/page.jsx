"use client";
import Main from "@/app/components/Main";
import "./css.css";
import Button from './Button';
import React, { useState, useEffect, useRef, useCallback } from "react";


const num = (quest) => {
  // Juntar números
  return quest.reduce(
    (arr, item) => {
      let last = arr.length - 1;
      // Es un número o un punto
      if (!isNaN(item) || item === ".") {
        if (!isNaN(arr[last])) {
          arr[last] = (arr[last] || "") + item;
        } else if (arr[last] == ".") {
          arr[last] = arr[last] + item;
        } else {
          arr.push(item);
        }
      } else {
        if (arr[last] !== undefined && arr[last] !== "") {
          arr.push(item);
        } else {
          arr[last] = item;
        }
      }
      return arr;
    },
    [""]
  );
};

const calculate = (quest,answer) => {
  console.log("Inicio ",quest);
  
  const  processParentheses = (arr) => {
    // Separar en parentesis
    let stack = [];
    let startIdx = 0;
    let bParenthesis = false;
    let nParenthesis = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "(") {
        if (nParenthesis == 0) startIdx = i; // Guardar el índice de inicio del paréntesis
        bParenthesis = true;
        nParenthesis++;
      } else if (arr[i] == ")") {
        nParenthesis--;
        if (nParenthesis == 0 && bParenthesis) {
          let temporal = calculate(arr.slice(startIdx + 1,i));
          if (isNaN(stack[stack.length-1])) stack.push(temporal);
          else stack.push("x",temporal);
          bParenthesis = false;
        }
      } else if (!bParenthesis) {
        stack.push(arr[i] === "ANS" ? answer : arr[i]);
      } else if (bParenthesis && arr.length - 1 == i) {
        let temporal = calculate(arr.slice(startIdx + 1,i + 1));
        if (isNaN(stack[stack.length-1])) stack.push(temporal);
        else stack.push("x",temporal);
      }
    }
    return stack;
  }

  const separator = (arr) => {
    // Resolver problemas
    let k = 0
    let temporal = []
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (["+", "-"].includes(arr[i])) {
        // Si son las operaciones
        if (i !== 0) k++;
        temporal = [];
        temporal.push(arr[i]);
        result[k] = temporal;
      } else {
        // Si es un número
        temporal.push(arr[i]);
        result[k] = temporal;
      }
    }
    return result;
  };
  
  const operator = (arr) => {
    // Hacer operaciones
    let sign = "+";
    let op = "";
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (["+","-"].includes(arr[i])) {
        if (arr[i] == "-" && sign == "-") sign = "+";
        else sign = arr[i];
      } else if (["x","/"].includes(arr[i])) {
        op = arr[i];
      } else if (!isNaN(arr[i])) {
        let [NI1,ND1] = num.toString().split(".")
        let [NI2,ND2] = arr[i].toString().split(".")
        ND2 = ND2 ? ND2 : "";
        ND1 = ND1 ? ND1 : "";
        let NF1 = ND1.length;
        let NF2 = ND2.length;
        if (op == "x" || op == "/") {
          if (op == "x") {
            if (Math.sign(arr[i]) == 1) {
              num = parseInt(NI1.concat(ND1)) * parseInt(sign.concat(NI2.concat(ND2))) / Math.pow(10, (NF1) + (NF2));
            } else {
              num = parseInt(NI1.concat(ND1)) * parseInt(NI2.concat(ND2)) / Math.pow(10, (NF1) + (NF2))
              if (sign == "-") num *= -1;
            }
          } else {
            if (Math.sign(arr[i]) == 1) {
              num = (parseInt(NI1.concat(ND1)) * Math.pow(10,NF2)) / (parseInt(sign.concat(NI2.concat(ND2))) * Math.pow(10,NF1));
            } else {
              num = (parseInt(NI1.concat(ND1)) * Math.pow(10,NF2)) / (parseInt(NI2.concat(ND2)) * Math.pow(10,NF1));
              if (sign == "-") num *= -1;
            }
          }
        } else if (sign == "+" || sign == "-") {
          let float = 0; // Llevarse una
          if (NF1 < NF2) ND1 = `${ND1}${"0".repeat(NF2 - NF1)}`
          else ND2 = `${ND2}${"0".repeat(NF1 - NF2)}`
          float = ND2.toString().length;
          // Desarrollar
          console.log(parseInt(`${NI1}${ND1}`),parseInt(`${NI2}${ND2}`))
          if (Math.sign(arr[i]) == 1) {
            num = parseFloat(`${sign}${((parseInt(`${NI1}${ND1}`) + parseInt(`${NI2}${ND2}`))) / Math.pow(10,float)}`);
          } else {
            num = parseFloat(`${((parseInt(`${NI1}${ND1}`) + parseInt(`${NI2}${ND2}`))) / Math.pow(10,float)}`);
            if (sign == "-") num *= -1;
          }
          sign = "+";
        } else {
          console.log("Error: ",arr[i]);
        }
      } else {
        console.log("Error: ",arr[i]);
      }
    }
    if (arr.length == 1 && ["+","-"].includes(arr[0])) return sign;
    else if (arr.length == 1 && isNaN(arr[0])) return op;
    else if (isNaN(arr[arr.length - 1])) return [num,op];
    else return num;
  };

  // Separar parentesis
  quest = processParentheses(quest);
  console.log("Respuesta ",quest);

  // Separar en Suma y resta
  quest = separator(quest);
  console.log("Respuesta ",quest);

  // Resuelve
  quest = quest.map(operator);
  console.log("Respuesta ",quest);

  // Aplanar Arrays
  quest = quest.reduce((accumulate, value) => accumulate.concat(value), [])
  console.log("Respuesta ",quest);

  // Suma y Resta
  quest = operator(quest)
  console.log("Respuesta ",quest);

  return quest;
};


export default function Page() {
  const buttonsRef = useRef(null);
  const [quest, setQuest] = useState([]);
  const [history, setHistory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [answer, setAnswer] = useState("0");
  const [result, setResult] = useState(false)

  const options = useCallback((btn) => {
    if (btn === "AC") {
      setQuest([]); // Reiniciar la operación
      setAnswer("0"); // Reiniciar la respuesta a 0
      setOperation(""); // Limpiar la operación mostrada
    } else if (btn === "DEL" || btn === "Backspace") {
      const updatedQuest = [...quest];
      updatedQuest.pop(); // Eliminar el último valor
      setQuest(updatedQuest); // Actualizar el estado de la operación
      setOperation(updatedQuest.join("")); // Actualizar la operación mostrada
    } else if (btn === "Enter" || btn === "=") {
      try {
        setHistory(answer);
        setAnswer(calculate(num(quest),answer));
        setResult(true)
      } catch (err) {
        setAnswer("Error");
        console.log(err);
      }
    }
  }, [quest, answer]);

  const buttonValue = useCallback((btn, ctrl) => {
    if (["Backspace", "Enter", "DEL", "AC", "="].includes(btn)) {
      if (btn === "Backspace" && ctrl) {
        options("AC");
      } else {
        options(btn);
      }
    } else if (["0","1","2","3","4","5","6","7","8","9",".","/","*","-","+","(",")","x","X","ANS","a","A","^"].includes(btn)) {
      let info = "";
      let shouldReset = false;
      if (btn === "X" || btn === "*") btn = "x";
      if (result) {
        // Si ya hay un resultado previo y el usuario presiona un número u operador
        if (["x", "/", "-", "+", "^"].includes(btn)) {
          // Agregar `ANS` seguido del operador si es una nueva operación
          setQuest(["ANS", btn]);
          info = ["ANS", btn].join("");
        } else {
          // Si es un número u otro, reiniciar la operación
          setQuest([btn]);
          shouldReset = true;
          info = btn;
        }
        setResult(false);  // Desactivar el resultado previo para la próxima operación
      } else {
        // Si no hay resultado previo, simplemente continuar la operación
        setQuest([...quest, btn]);
        info = quest.join("") + btn;
      }
        setOperation(info);
    }
  }, [options, quest, result]);


  useEffect(() => {
    const handleClick = (event) => buttonValue(event.target.value);

    const handleKeyDown = (event) => buttonValue(event.key, event.ctrlKey);

    const buttonsContainer = buttonsRef.current;
    if (buttonsContainer) {
      const buttons = buttonsContainer.querySelectorAll("button");
      buttons.forEach((button) => button.addEventListener("click", handleClick));
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (buttonsContainer) {
        const buttons = buttonsContainer.querySelectorAll("button");
        buttons.forEach((button) => button.removeEventListener("click", handleClick));
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [buttonValue]);

  return (
    <Main title="Calculadora" className="cont__pages">
      <div className="f4" ref={buttonsRef}>
        <div className="f4__window">
          <div className="f4__window-history">{history}</div>
          <div className="f4__window-quest">
            <div className="f4__window-operation">{operation}</div>
            <div className="f4__window-text">_</div>
          </div>
          <div className="f4__window-answer">{answer}</div>
        </div>
        <div className="f4__buttons-s">
          <Button type="1" text="(" value="("></Button>
          <Button type="1" text=")" value=")"></Button>
          <Button type="1" text="√" value="v"></Button>
          <Button type="1" text="x²" value="^2"></Button>
          <Button type="1" text="^(x)" value="^"></Button>
          <Button type="1" text="%" value="%"></Button>
        </div>
        <div className="f4__buttons-b">
          <Button type="0" text="7" value="7">7</Button>
          <Button type="0" text="8" value="8"></Button>
          <Button type="0" text="9" value="9"></Button>
          <Button type="0" text="DEL" value="DEL"></Button>
          <Button type="0" text="AC" value="AC"></Button>
          <Button type="0" text="4" value="4"></Button>
          <Button type="0" text="5" value="5"></Button>
          <Button type="0" text="6" value="6"></Button>
          <Button type="0" text="x" value="x"></Button>
          <Button type="0" text="/" value="/"></Button>
          <Button type="0" text="1" value="1"></Button>
          <Button type="0" text="2" value="2"></Button>
          <Button type="0" text="3" value="3"></Button>
          <Button type="0" text="+" value="+"></Button>
          <Button type="0" text="-" value="-"></Button>
          <Button type="0" text="0" value="0"></Button>
          <Button type="0" text="•" value="."></Button>
          <Button type="0" text="EXP" value="EXP"></Button>
          <Button type="0" text="ANS" value="ANS"></Button>
          <Button type="0" text="=" value="="></Button>
        </div>
        <div className="f4__process">=</div>
      </div>
    </Main>
  );
}
