import React from "react";
import "./Status.css";

function OnUpdate() {
  return (
    <div className="status">
      <p className="status__text">Статус:</p>
      <div className="onupdate__circle" />
      <p className="onupdate__text">On Update</p>
    </div>
  );
}

export default OnUpdate;