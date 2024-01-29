import { React, useState } from "react";
import Pill from "../ItemCard/FooterComponents/RewardPill/Pill";
import { Link } from "react-router-dom";
import { getWebglURL } from "utils/3dviewer-utils";
import { BlockIcon, InfiniteIcon, SeparatorLine, BlockChainLogo } from "../../../assets/SVGs/SVGs";
import "./ProductImage.scss";
import PreviewImageModal from "../Modals/PreviewImageModal/PreviewImageModal";

const RarityHash = {
  Common: "var(--common)",
  Uncommon: "var(--uncommon)",
  rare: "var(--rare)",
  special: "var(--special)",
  legendary: "var(--legendary)",
  mythical: "var(--mythical)",
  golden: "var(--golden)",
  platinum: "var(--platinum)",
};

const ProductImage = ({
  forPack,
  image,
  brandImage,
  blockChainImage,
  rarity,
  generation,
  item_Type,
  totalSKUCount,
  transparent,
  webglUrl,
  name,
}) => {
  const [show, setShow] = useState(false);
  const iconColor = transparent;
  const ToggleView = () => {
    return setShow((showFlag) => !showFlag);
  };
  let dummyItem = {
    webgl_url:
      // "https://tv-inventory-dev.s3.ap-south-1.amazonaws.com/legendary/models/3d/webgl/los_jr_a1.dlc",
      // "https://terravirtua-dev.s3.eu-west-2.amazonaws.com/avtr_afb_d.dlc",
      // "https://tv-inventory.s3.eu-west-2.amazonaws.com/terravirtua/models/3d/webgl/avtr_elpva_a.dlc",
      webglUrl,
    variation_name: "purple",
    is_tradable: true,
    name: name,
  };
  return (
    <div className='product-image tv-card__body'>
      {/* <TopPill
        size={"top-pill-wide"}
        rarityColor={RarityHash[rarity?.name]}
        rarity={rarity?.name}
        rarityContent={rarity?.name}
      /> */}

      <div className='item-purchase__content'>
        <div className='item-purchase__header d-flex justify-content-between'>
          {/* <div className="item-purchase-left">
            {forPack ?
              <TopGunLogo />
              :
              <>
              {brandImage &&
                <div className="tv-mr-8 tv-pr-8"><img src={brandImage} alt="Paramount Logo" /></div>
              }
              {blockChainImage &&
                <img src={blockChainImage} alt="Paramount Logo" className="tv-mr-8"/>
              }

              </>
            }
          </div> */}
          <div className='item-purchase-left d-flex align-items-center'>
            <>
              {brandImage && <img src={brandImage} alt=' Brand Logo' />}
              <div className='item-purchase-left-separator'>
                <SeparatorLine />
              </div>
              {blockChainImage && (
                <>
                  <BlockChainLogo />
                </>
              )}
            </>
          </div>
          <div className={`item-purchase-right ${transparent ? "item-purchase__disabled" : ""} d-flex`}>
            {forPack ? (
              <p>{totalSKUCount} Total</p>
            ) : (
              <>
                {/* <Pill color="pill-gray"> 3DA </Pill> */}

                {item_Type && <img src={item_Type} alt='3DA' className='item-purchase-right-3da-logo' />}
                {generation && <Pill color='pill-transparent'>{generation}</Pill>}
              </>
            )}
          </div>
        </div>
        <div className='item-purchase__image'>{image && <img src={image} alt='Jenny big Image' />}</div>

        <div className={`item-purchase__footer ${transparent ? "" : "item-purchase__disabled"}`}>
          {webglUrl !== null && !forPack && (
            <Link
              to={{
                pathname: getWebglURL(dummyItem),
              }}
              target='_blank'
            >
              <InfiniteIcon color={iconColor ? "black" : "#95A2B4"} />
            </Link>
          )}
          <div />
          <div className={`image-preview-icon ${transparent ? "" : "item-purchase__disabled"}`} onClick={ToggleView}>
            <BlockIcon color={iconColor ? "black" : "#95A2B4"} />
          </div>
          {show && <PreviewImageModal Img={image} togglePreview={ToggleView} />}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
