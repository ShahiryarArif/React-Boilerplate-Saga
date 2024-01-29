import React from "react";
import "./button.scss";

const ConfigButton = ({ children, isGrey }) => {
  return (
    <button className={`tv-btn tv-btn-white ${isGrey && "tv-btn-grey"}`}>
      {children}
    </button>
  );
};

export default ConfigButton;
