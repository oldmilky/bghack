import React from "react";
import "./Card.css";

function Price() {
  return (
    <div className="price">
      <p className="price__text">
        от <span className="price__span">290</span> ₽
      </p>
    </div>
  );
}

export default Price;
