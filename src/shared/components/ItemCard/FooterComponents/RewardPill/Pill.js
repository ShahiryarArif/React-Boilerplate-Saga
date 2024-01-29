import React from "react";
import "./pill.scss";

const Pill = ({ children, color, size, extraClasses, rarityColor }) => {
  return (
    <div
      id="pill"
      className={`${color} ${size} ${extraClasses}`}
      style={{ backgroundColor: rarityColor, color: "black" }}
    >
      {children}
    </div>
  );
};

export default Pill;
