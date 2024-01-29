import { CompletedSmallCard } from "assets/SVGs/SVGs";
import React from "react";
import "./CompletedCollectionSmallCard.scss";

const CompletedCollectionSmallCard = ({ children ,rarity}) => {
  return (
    <div className="completed-sm-card">
      <div className="completed-sm-card-content">
        <div className="completed-sm-card-title d-flex flex-column  align-items-center">
          <CompletedSmallCard />
          {children?(
             <div className="completed-small-card-reward d-flex justify-content-center tv-my-30">
             {children}
           </div>
          ):""}
          <p className="completed-sm-card-info">
            {`You won a ${rarity?.name?.toLowerCase()} item by completing this collection.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompletedCollectionSmallCard;
