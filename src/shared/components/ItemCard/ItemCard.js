import React from "react";
import "./itemcard.scss";
import TopPill from "./HeaderComponents/TopPill/TopPill";
import { Link } from "react-router-dom";
import Badge from "../Badge/TvBadge";
import {
  ZeroSevenLogo,
  TickLogo,
  More,
  ImportantGradientLogo,
  StarGradient,
  EtheriumLogo,
  SeparatorLogo,
  EclipseSmallIcon,
} from "../../../assets/SVGs/SVGs";
import Dropdown from "react-bootstrap/Dropdown";

const RarityHash = {
  common: "var(--common)",
  uncommon: "var(--uncommon)", //dark
  rare: "var(--rare)", //dark
  special: "var(--special)", //dark
  mythical: "var(--mythical)", //white
  golden: "var(--golden)", //dark
  platinum: "var(--platinum)", //dark
  legendary:"var(--legendary)"
};

const ItemCard = ({
  haveTickIcon, //the swoosh that shows on top right of card
  isMeduimSized, ///new prop to render card with dimensions 247 * 342
  haveBlockChainIcon,
  haveDiamondIcon,
  haveEtheriumLogo,
  nInstances, //how many instances of this card are owned, by default '07'
  isSmall, //for very small card(130x140)
  isVSmall,
  isRewardCard, //prop to render card like reward card
  isPackCard, //prop to render card like pack card
  rarity, //the rairty of card, decided its colors
  name, //the name of item
  image, // main image
  status, //info that is showed next to name
  estValue, //It contains the generation
  collectionIcon, //what collection this card belongs to
  isRewardedCard, //
  inActive, //lowers the opacity of overall cardputs a golden star at top
  haveGoldenBorder, //for reward type cards
  leftFooterContents, //all items on left bottom of card
  rightFooterContents, //all items on right bottom of card
  bidPrice,
  offerSent, //for when offer is sent
  have3DALogo, //Its the itemType logo on the bottom right corner
  moreOptions,
  footerBadgeContent, //for the footer pill that shows on Packs Cards
  footerBadgeClass, //to control the footer pill color, 'badge-red', 'badge-golden' etc
  tradingModalShow, // trading Modal will show onClick
  isAuctionCard, //a prop passed to the card in trading module, to render the mobile modal for auction type
  badgeContent, //the top badge that shows timer etc
  badgeColor, //the top badge's color
  route, //route for Link tag
  tradeRevealOption, //prop to handle 'Trade | Reveal' on bottom of Packs Cards
  slug,
  type,
  itemType,
  isMoreOptions,
  togalModal,
  count, //new prop for hits -> on DesktopSearch etc
  serialNumber,
  revealPacksHandler,
  packSKuID,
  packImage,
  isCompleted,
  noTouch,
  setSelling,
  setAuction,
  asset,
  location,
}) => {
  let tradingParam = "sale";
  const getNavigateLink = (item) => {
    if (item === "Preview") {
      return linkCreator(slug, type, itemType, serialNumber);
    } else if (item === "Cancel Auction" || item === "Put on Auction") {
      tradingParam = "auction";
      return `/trading`;
    } else if (item === "Cancel Sale" || item === "Sell Item") {
      tradingParam = "sale";
      return `/trading`;
    } else if (item === "Gift Item") {
      return "#";
    } else if (item === "Blockchain View") {
      return "#";
    } else {
      return "#";
    }
  };
  const chooseCategory = (option) => {
    if (option === "Put on Auction") {
      setAuction(asset);
    } else if (option === "Sell Item") {
      setSelling(asset);
    }
  };

  const linkCreatorIfCon = (
    itemSlug,
    itemState,
    typeOfItem,
    itemSerialNumber
  ) => {
    if (itemState === "onauction" || itemState === "purchased") {
      return `/productdetail/${itemSlug}/${itemState}&serial=${itemSerialNumber}`;
    } else {
      if (location === "dashBoard") {
        return `/productdetail/${itemSlug}/${itemState}&serial=${itemSerialNumber}`;
      } else {
        return `/productdetail/${itemSlug}/${itemState}`;
      }
    }
  };

  //link creation depends upon itemType
  const linkCreator = (itemSlug, itemState, typeOfItem, itemSerialNumber) => {
    if (typeOfItem !== undefined && typeOfItem.includes("asset")) {
      return linkCreatorIfCon(
        itemSlug,
        itemState,
        typeOfItem,
        itemSerialNumber
      );
    } else if (typeOfItem && typeOfItem.includes("pack")) {
      if (itemState === "reserved") {
        return "#";
      } else {
        return `/packdetail/${itemSlug}/${itemState}`;
      }
    } else if (typeOfItem === "reward") {
      return "#";
    } else if (typeOfItem === "trading") {
      return `/trading${window.location.search}`;
    } 
    else if(route){
      return `${route}`;
    }
  };

  const rarityDom = () => {
    return (
      rarity && (
        <TopPill
          rarityColor={RarityHash[rarity?.toLowerCase()]}
          rarityContent={rarity}
          textColor={rarity === "mythical" ? "white" : "var(--black)"}
        />
      )
    );
  };

  const badgeContentDom = () => {
    return (
      badgeContent && (
        <div className="itemcard__badges d-flex">
          <Badge colorClass={badgeColor} extraClasses={"tv-px-32"}>
            {badgeContent}
          </Badge>
        </div>
      )
    );
  };

  const cssClass = () => {
    return `${inActive ? "itemcard__in-active" : ""} ${
      haveGoldenBorder ? "itemcard__golden" : ""
    }  ${isPackCard ? "itemcard__pack-card" : ""}  ${
      isSmall ? "itemcard__small" : ""
    }  ${isVSmall ? "itemcard__vsmall" : ""}
      ${isRewardCard ? "itemcard__reward" : ""}
      ${isMeduimSized ? "itemcard__meduim" : ""} ${
      isCompleted === true ? "itemcard__completed" : ""
    }`;
  };

  const handleLink = () => {
    return (
      <>
        <div className="itemcard__img flex-grow-1">
          {image && <img src={image} alt="" className="" />}
        </div>

        <div className="itemcard__info">
          {name ? <h5 className="itemcard__name">{name}</h5> : ""}
          <div className="itemcard__info-box">
            <span>
              {status && <> {status}</>}
              {estValue && estValue !== "nan" && (
                <>
                  {" "}
                  <EclipseSmallIcon /> {estValue}{" "}
                </>
              )}
            </span>
          </div>
        </div>
      </>
    );
  };

  const handleFooter = () => {
    return (
      <>
        <div className="itemcard__footer-left">
          {leftFooterContents ? leftFooterContents : ""}
          {count ? (
            <>
              <span className="itemcard__count">{count}</span>
            </>
          ) : (
            ""
          )}
          <span className="d-flex">
            {bidPrice && (
              <>
                {isRewardedCard && <StarGradient />}
                {offerSent && <ImportantGradientLogo />}
                <p className="itemcard__bid-price">{bidPrice}</p>
                {/* <p className="itemcard__bid-price">Trade | Reveal</p> */}
              </>
            )}
            {tradeRevealOption === true ? (
              <p className="itemcard__tradeRevealOptions">
                <Link to="/trading" className="me-0">
                  Trade{" "}
                </Link>
                <span className="itemcard__tradeRevealOptions-separator">
                  <SeparatorLogo />
                </span>{" "}
                <Link
                  to="#"
                  onClick={() => revealPacksHandler(packSKuID, packImage)}
                >
                  Reveal{" "}
                </Link>
              </p>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="itemcard__footer-right">
          {rightFooterContents ? rightFooterContents : ""}
          {have3DALogo && <img src={have3DALogo} />}
          {footerBadgeContent && (
            <Badge
              isSimple
              isSmall
              colorClass={footerBadgeClass ? footerBadgeClass : ""}
            >
              {footerBadgeContent}
            </Badge>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <div className={`itemcard h-100 ${cssClass()}`} 
      >
        {badgeContentDom()}
        {rarityDom()}

        <div className="itemcard__content d-flex h-100 justify-content-between flex-column">
          <div className={`itemcard__header ${noTouch && "no-touch"}`}>
            <div className="itemcard__header-left">
              {!isPackCard && collectionIcon && (
                <img
                  src={collectionIcon}
                  alt=""
                  className="itemcard__img-collection"
                />
              )}
              {haveBlockChainIcon && <img src={haveBlockChainIcon} />}
            </div>
            <div className="itemcard__header-right">
              {haveTickIcon && (
                <div className="itemcard__img-tick">
                  {" "}
                  <TickLogo />{" "}
                </div>
              )}
              {haveEtheriumLogo && <EtheriumLogo />}
              {nInstances && (
                <div className="itemcard__img-07">
                  {" "}
                  <ZeroSevenLogo />{" "}
                </div>
              )}
              {isMoreOptions && (
                <>
                  {!isPackCard && !isSmall && !isRewardCard && (
                    <Link
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      to="#"
                    >
                      <Dropdown align="end" id="itemcard__dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <More />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {moreOptions &&
                            moreOptions.map((item, index) => {
                              return (
                                <Dropdown.Item key={index}>
                                  <Link
                                    to={{
                                      pathname: getNavigateLink(item),
                                      state: location,
                                      params: tradingParam,
                                    }}
                                    onClick={() => chooseCategory(item)}
                                  >
                                    {" "}
                                    {item}{" "}
                                  </Link>
                                </Dropdown.Item>
                              );
                            })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
          <Link
            to={{
              pathname: linkCreator(slug, type, itemType, serialNumber),
              state: location,
            }}
            onClick={togalModal ? togalModal : ""}
            className={`${noTouch && "no-touch"}`}
          >
            {handleLink()}
          </Link>

          <div className="itemcard__footer">{handleFooter()}</div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
