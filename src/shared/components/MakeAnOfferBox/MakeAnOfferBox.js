import React from "react";
import "./MakeAnOfferBox.scss";

const MakeAnOfferBox = ({lastSold,collectors}) => {
  return (
    <div className="makeAnOfferBox d-flex flex-sm-row flex-column justify-content-between align-items-center text-center  ">
      <div className="makeAnOfferBox-item d-flex flex-column justify-content-between">
        <span className="makeAnOfferBox-title ">Collectors</span>
        <h4 className="tv-mt-18">{collectors}</h4>
      </div>
      <div className="makeAnOfferBox-item d-flex flex-column justify-content-between">
        <span className="makeAnOfferBox-title">Last sold for</span>
        <h4 className="tv-mt-18"> USD ${lastSold}</h4>
      </div>
      <div className="makeAnOfferBox-item  d-flex flex-column justify-content-between">
        <span className="makeAnOfferBox-title">Estimated Worth</span>
        <h4 className="tv-mt-18">N/A</h4>
      </div>
    </div>
  );
};

export default MakeAnOfferBox;
