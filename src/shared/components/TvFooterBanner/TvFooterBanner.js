import { GreenEclipse, MessageIcon } from "assets/SVGs/SVGs";
import "./TvFooterBanner.scss";
import React from "react";

const TvFooterBanner = () => {
  return (
    <div className="tv-footer-banner w-100 tv-py-8 d-flex tv-px-14 ">
      <div className="tv-footer-banner-text">
        <h5 className="w-100">
          ALERT - Terra Virtua Mailing Servers are currently facing some
          technical issues and our developers are hard at work to fix them. New
          Account registration and 2 Factor Authentication, along with Invoices
          are currently paused. We are sorry for the inconvenience.
        </h5>
      </div>
      <span className="tv-footer-banner-icon tv-py-4">
        <MessageIcon />
        <span>
          <GreenEclipse />
        </span>
      </span>
    </div>
  );
};

export default TvFooterBanner;
