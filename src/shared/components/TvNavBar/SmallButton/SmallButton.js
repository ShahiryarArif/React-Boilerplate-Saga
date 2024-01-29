import React from "react";
import "./smallButton.scss";
import GreenLight from "../../../../assets/images/green-light.svg";

const SmallButton = ({
  children,
  isRound,
  hasGreenLight,
  bgClass,
  extraClasses,
  togalModal,
}) => {
  return (
    <button
      className={`smallButton ${isRound ? "smallButton-round" : ""} ${
         bgClass ? bgClass : ''
      } ${extraClasses ? extraClasses : ''}`}
      onClick={togalModal}
    >
      {hasGreenLight && (
        <img src={GreenLight} alt="Green Light" className="smallButton-green" />
      )}
      {children}
    </button>
  );
};

export default SmallButton;
