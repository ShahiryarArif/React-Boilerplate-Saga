import { HammerIcon } from "assets/SVGs/SVGs";
import React from "react";
import "./EmptyAuction.scss";

const EmptyAuction = () => {
  return (
    <div className="empty-auction d-flex justify-content-center align-items-center h-100  pt-5 pb-5">
      <div className="text-center empty-auction-inner">
        <HammerIcon />
        <p className="tv-mt-22">
          Select items from your inventory to add them for action
        </p>
      </div>
    </div>
  );
};

export default EmptyAuction;
