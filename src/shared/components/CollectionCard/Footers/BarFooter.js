import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { RightArrow } from "../../../../assets/SVGs/SVGs";
import "./barfooter.scss";

const BarFooter = ({ width, haveRightArrow, content, strongContent }) => {
  return (
    <div id="bar-footer">
      <div className="bar-footer__heading">
        <span>
          <strong className="">{strongContent}</strong> {content}
        </span>

        {haveRightArrow && <RightArrow color={"black"} />}
      </div>
      <ProgressBar now={width} />
    </div>
  );
};

export default BarFooter;
