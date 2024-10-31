import React, { useState, useEffect } from "react";

const addZeros = (n) => {
  "use strict";
  if (n.toString().length < 2) return "0".concat(n);
  return n;
};

export default function Time() {

  return (
    <div className="time">
      <div className="hora">{addZeros("00")}</div>
      <div>:</div>
      <div className="min">{addZeros("00")}</div>
    </div>
  );
}
