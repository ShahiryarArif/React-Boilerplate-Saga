import React from "react";
import "./top-pill.scss";

const TopPill = ({ size, rarityColor, rarityContent, textColor }) => {
  return (
    <div
      id="top-pill"
      style={{ backgroundColor: rarityColor }}
      className={`${size}`}
    >
      <p style={{ color: textColor }}>{rarityContent?rarityContent:""}</p>
    </div>
  );
};

export default TopPill;
