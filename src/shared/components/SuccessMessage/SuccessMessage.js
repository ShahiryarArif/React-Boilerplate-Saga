import { CrossArrow } from "assets/SVGs/SVGs";
import React from "react";
import "./SuccessMessage.scss";

const SuccessMessage = ({ show, setShow, title, info, icon }) => {
  return (
    <div
      className={`success-msg d-flex align-items-center tv-py-22 tv-px-30 ${
        show && "active"
      }`}
    >
      <div className="success-msg-left">
        <span className="success-msg-icon tv-mr-12">{icon ? icon : ''}</span>
      </div>
      <div className="success-msg-right">
        <h5 className="success-msg-title">{title ? title : ''}</h5>
        <p className="success-msg-info w-75">{info ? info : ''}</p>
      </div>
      <span onClick={() => setShow(false)}>
        <CrossArrow />
      </span>
    </div>
  );
};

export default SuccessMessage;
