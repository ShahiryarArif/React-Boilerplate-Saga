import { BackArrow, LongRightArrow } from "assets/SVGs/SVGs";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import "./coverArea.scss";

const CoverArea = ({
  img,
  subtitle,
  subtitleColor,
  title,
  desc,
  textColor,
  isBackBtn,
  backBtnText,
  backBtnTextColor,
  haveBackgroundFilter,
  link,
  backIconColor,
}) => {
  return (
    <div
      className={`tv-cover-area-wrapper ${
        textColor ? "tv-color-" + textColor : ""
      }`}
    >
      <div
        className={`tv-ca-img   ${
          haveBackgroundFilter && "tv-ca-img-background"
        }`}
      >
        <img src={img} alt="cover area image" />
      </div>
      <div className="tv-ca-text tv-container">
        <div className="tv-ca-text-content tv-mb-36">
          {isBackBtn && (
            <Link
              to={link}
              className={`tv-ca-backBtn ${
                backBtnTextColor ? backBtnTextColor : ""
              }`}
            >
              {" "}
              <BackArrow color={backIconColor} /> &nbsp;&nbsp;&nbsp;
              {backBtnText}
            </Link>
          )}
          <strong
            className={`tv-ca-subtitle ${subtitleColor ? subtitleColor : ""}`}
          >
            {subtitle}
          </strong>
          <h2>{title}</h2>
          <p>{desc}</p>
          <PrimaryButton
            type="button"
            size="btn-all-unset"
            text="Shop Now"
            rounded={false}
            outlined={false}
            btnBG="tv-btn-gradient m-0"
            spacingClasses="tv-py-16 tv-px-60"
            additionalClass=""
            hasIcon={true}
            reverse={true}
            isLink={true}
            href="/"
            icon={<LongRightArrow color="white" />}
          />
        </div>
      </div>
    </div>
  );
};

export default CoverArea;
