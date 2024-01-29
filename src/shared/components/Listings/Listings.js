import DualBox from "modules/MarketPlace/components/ItemScenarios/DualBox/DualBox";
import React from "react";
import MakeAnOfferBox from "shared/components/MakeAnOfferBox/MakeAnOfferBox";
import MatchBox from "shared/components/MatchBox/MatchBox";
import TvNumberInput from "shared/components/TvNumberInput/TvNumberInput";
import "./Listings.scss";

const Listings = ({
  description,
  haveMatchBox,
  haveMatchBoxUnderlined,
  haveOffer,
  haveAuctionBox,
  haveNumberInput,
  haveBorderBottom,
  minBid,
  haveTimer,
  badgeContent,
  badgeClass,
  badgeInfo,
  btnOnClick,
  priceSubText,
  skuTotalCount,
  skuCount,
  price,
  expiryDate,
  item_sku_id,
  placeOffer,
  disabled,
  placeBid, //bid Button ActionDispatcher
  auctionID, //required for placing Bid
  offerNumberInput, //Number Input Without BidBTn
  handleInputChange,
  lastSold,
  collectors,
}) => {

  return (
    <>
      <div className={`listings ${haveBorderBottom ? "border-btm" : ""}`}>
        {badgeContent && (
          <div className="listing-badge-wrapper">
            <p
              className={`listing-badge text-center ${
                badgeClass ? badgeClass : ''
              }`}
            >
              {badgeContent}
            </p>
            <p className="listing-badge-info  tv-mt-16">
              {badgeInfo ? badgeInfo : ''}
            </p>
          </div>
        )}
        {haveOffer && (
          <div className="tv-mt-50">
            <MakeAnOfferBox lastSold={lastSold} collectors={collectors} />
          </div>
        )}

        <div className="" data-check={priceSubText}>
          {haveTimer && (
            <DualBox
              priceSubTextt={priceSubText}
              isAuctionBox
              description={description}
              expiryDate={expiryDate}
            />
          )}
          {haveAuctionBox && (
            <div className="listings-box">
              <DualBox priceSubTextt={priceSubText} description={description} />
            </div>
          )}
        </div>
        {haveMatchBox && (
          <div className="listings-box">
            <MatchBox
              bestMatch="Best Match"
              serialNumber={`#${skuCount} of ${skuTotalCount} - USD $${price}`}
              btnContent="CHANGE"
              btnClick={btnOnClick}
            />
          </div>
        )}
       
        {haveMatchBoxUnderlined && (
          <div className="listings-box">
            <MatchBox
              btnClick={btnOnClick}
              underlinedSerialNumber="Click to see all serial numbers"
              btnContent="CHANGE"
            />
          </div>
        )}
        {haveNumberInput && (
          <div className="listings-box">
            <TvNumberInput
              disable={disabled()}
              auctionID={auctionID}
              haveBidBtn
              priceSubText={priceSubText}
              placeBidAction={placeBid}
              placeOffer={placeOffer}
              item_sku_id={item_sku_id}
              handleInputChange={handleInputChange}
            />
            {minBid && (
              <>
                {" "}
                Minimum Bid : <strong>{minBid} </strong>
              </>
            )}
          </div>
        )}
        {offerNumberInput && (
          <div className="listings-box">
            <TvNumberInput
              auctionID={auctionID}
              priceSubText={priceSubText}
              placeBidAction={placeBid}
              placeOffer={placeOffer}
              item_sku_id={item_sku_id}
              handleInputChange={handleInputChange}
            />
            {minBid && (
              <>
                {" "}
                Minimum Bid : <strong>{minBid} </strong>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Listings;
