import React from "react";
import "./Card.css";

function Price({ day1, day7, day30 }) {
  return (
    <div className="price">
      <p className="price__text">
        от{" "}
        {day1 ? (
          <span className="price__span">{day1}</span>
        ) : day7 ? (
          <span className="price__span">{day7}</span>
        ) : (
          <span className="price__span">{day30}</span>
        )}
        {" "}₽
      </p>
    </div>
  );
}

export default Price;
