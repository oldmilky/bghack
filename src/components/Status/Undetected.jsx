import React from "react";
import "./Status.css";

function Undetected() {
  return (
    <div className="status">
      <p className="status__text">Статус:</p>
      <div className="undetect__circle" />
      <p className="undetect__text">Undetected</p>
    </div>
  );
}

export default Undetected;