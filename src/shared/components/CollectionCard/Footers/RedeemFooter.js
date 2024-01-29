import React from "react";
import "./RedeemFooter.scss";
import { RightArrow } from "../../../../assets/SVGs/SVGs";

const RedeemFooter = ({ content }) => {
  return (
    <div className="gradient-footer">
      <div className="gradient-footer__content">
        {content?(
        <h5 className="gradient-footer__text">{content}</h5>
        ):""}
        <div className="gradient-footer__icon">
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

export default RedeemFooter;
