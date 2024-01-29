import React from "react";
import "./collectioncard.scss";
import BarFooter from "./Footers/BarFooter";
import RedeemFooter from "./Footers/RedeemFooter";
import Badge from "../Badge/TvBadge";
import { Link } from "react-router-dom";
import YellowStar from "../../../assets/images/yellow-star.svg";
import SmallCard from "../../../modules/DashBoard/components/SmallCard/SmallCard";
import { RightArrow } from "assets/SVGs/SVGs";

const CollectionCard = ({
  id,
  slug,
  haveStar, //for collection complete
  isRedeemCard, //for redeem rewards -> shows a gradient colored footer btn
  footerContent, //text in footers
  name, //name of colllection
  title, //title of collection, 'Legendary'
  img, //main image
  badgeContent, //the top badge that shows timer etc
  secondBadgeContent, // a secong badge that shows on top
  badgeColor, //the top badge's color
  smallCardImg, //small card oerlay on main card
  strongContent, //any strong content to be passed to footer with progress bar
  rarity, //rarity of collection
  status, //status of collection (progress,completed etc)
  inProgress, //collection is in progress, so a progress bar is shown and the main image is mono-colored
  progressBarWidth, //for collection in progress, what amount of it has been completed
  startCollection, //'Start This Collection' footer
  brandImg,
}) => {
  const barFooterSetter = () => {
    if (
      (status === "inProgress" || status === "Expired") &&
      progressBarWidth <= 100
    ) {
      return (
        <BarFooter
          haveRightArrow
          width={progressBarWidth}
          strongContent={strongContent}
          content={footerContent}
        />
      );
    } else {
      if (status === "Completed") {
        return <RedeemFooter content={footerContent} />;
      } else return <></>;
    }
  };
  console.log("Badge Content", badgeContent);
  return (
    <div className="collection-card">
      <Link to={`/collection/${slug}`}>
        {badgeContent && (
          <div className="collection-card__badges d-flex">
            <Badge colorClass={badgeColor} extraClasses={"tv-px-32"}>
              {badgeContent}
            </Badge>
            {secondBadgeContent && (
              <>
                <Badge colorClass={badgeColor} extraClasses={"tv-px-32"}>
                  {secondBadgeContent}
                </Badge>{" "}
              </>
            )}
          </div>
        )}

        <div className="collection-card__content h-100 d-flex flex-column ">
          <div className="collection-card__heading">
            <div className="collection-card__heading-box">
              {name ? <h4>{name}</h4> : ""}
              <div className="collection-card__title-box d-flex align-items-center">
                {/* <LegendarySmallIcon /> */}
                {brandImg ? <img src={brandImg} alt="brand image" /> : ""}
                {title ? (
                  <span className="collection-card__title">{title}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="collection-card__yellow-star">
              {status === "Redeemed" && (
                <img src={YellowStar} alt="Yellow Star" />
              )}
            </div>
            {/* <div className="collection-card__heading-box">
              {haveStar && <img src={YellowStar} alt="Yellow Star" />}
            </div> */}
          </div>
          <div
            className={`collection-card__media ${
              status === "inProgress" ||
              status === "startCollection" ||
              status === "Completed"
                ? "collection-card__media-in-progress"
                : ""
            }`}
          >
            <img src={img ? img : ""} alt="" />
            <div className="collection-card__media-small">
              {smallCardImg && (
                <SmallCard
                  rarity={rarity}
                  img={smallCardImg}
                  pillContent={"REWARD"}
                />
              )}
            </div>
          </div>
          <div className="collection-card__footer flex-grow-1 d-flex flex-column justify-content-end">
            {status === "startCollection" && (
              <div className="collection-card__footer-start d-flex justify-content-between align-items-center">
                <span>Start this collection</span>
                <span>
                  <RightArrow color={"black"} />
                </span>
              </div>
            )}
            {status === "Redeemed" && (
              <div className="collection-card__footer-start d-flex justify-content-between align-items-center">
                <span>{footerContent}</span>
                <span>
                  <RightArrow color={"black"} />
                </span>
              </div>
            )}
            {barFooterSetter()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionCard;
