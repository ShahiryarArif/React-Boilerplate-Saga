import { PlusCircularIcon, WhitePlus } from "assets/SVGs/SVGs";
import React from "react";
import "./MatchBox.scss";

const MatchBox = ({
  bestMatch,
  serialNumber,
  underlinedSerialNumber,
  btnContent,
  haveCircularPlusBtn,
  btnClick,
}) => {
  return (
    <div className="match-box d-sm-flex align-items-center justify-content-between">
      <div className="match-box-left">
        {underlinedSerialNumber && (
          <p className="match-box-underlined tv-mb-8">
            {underlinedSerialNumber}
          </p>
        )}
        {bestMatch && <p className="best-match tv-mb-8">{bestMatch}</p>}
        {serialNumber && (
          <h5 className="match-box-price">{serialNumber ? serialNumber : ''}</h5>
        )}
      </div>
      {haveCircularPlusBtn && <PlusCircularIcon />}
      <div className="match-box-right">
        <button
          className="match-box-btn d-flex align-items-center"
          onClick={btnClick}
        >
          <span>{btnContent ? btnContent : ''}</span>
          <WhitePlus />
        </button>
      </div>
    </div>
  );
};

export default MatchBox;
