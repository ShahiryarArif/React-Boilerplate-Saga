import React from "react";
import "./WideTimer.scss";

const WideTimer = ({ days, minutes, seconds, hours }) => {
  return (
    <div className="wide-timer d-flex ">
      <div className="wide-timer-item text-center d-flex flex-column">
        <h3 className="tv-mb-6">{days ? days : ''}</h3>
        <span className="wide-timer-info">DAYS</span>
      </div>
      <div className="wide-timer-item  text-center d-flex flex-column">
        <h3 className="tv-mb-6">{minutes ? minutes : ''}</h3>
        <span className="wide-timer-info">DAYS</span>
      </div>
      <div className="wide-timer-item d-flex flex-column text-center ">
        <h3 className="tv-mb-6">{seconds ? seconds : ''}</h3>
        <span className="wide-timer-info">DAYS</span>
      </div>
      <div className="wide-timer-item  text-center d-flex flex-column">
        <h3 className="tv-mb-6">{hours ? hours : ''}</h3>
        <span className="wide-timer-info">DAYS</span>
      </div>
    </div>
  );
};

export default WideTimer;
