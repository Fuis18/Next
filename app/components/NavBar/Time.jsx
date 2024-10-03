import React, { useState, useEffect } from "react";

const addZeros = (n) => {
  "use strict";
  if (n.toString().length < 2) return "0".concat(n);
  return n;
};

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="time">
      <div className="hora">{addZeros(time.getHours())}</div>
      <div>:</div>
      <div className="min">{addZeros(time.getMinutes())}</div>
    </div>
  );
}
