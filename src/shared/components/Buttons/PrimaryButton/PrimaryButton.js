import React from "react";
import { Link } from "react-router-dom";
import "./primaryButton.scss";

const PrimaryButton = ({
  size,
  text,
  rounded,
  outlined,
  btnBG,
  spacingClasses,
  type,
  additionalClass,
  hasIcon,
  reverse,
  icon,
  togalModal,
  isLink,
  href,
  disabled,
  unBold,
}) => {

  const linkDom = () => {
    return (
      <Link
          to={href}
          type={type}
          id="tv-btn"
          className={`btn d-inline-flex align-items-center ${
            reverse ? "flex-row-reverse" : ""
          } ${additionalClass} ${size} ${btnBG} ${spacingClasses} ${
            outlined ? "tv-btn-outlined" : ""
          } ${rounded ? "tv-btn-rounded" : ""}`}
          onClick={togalModal}
        >
          {hasIcon && (
            <span
              className={reverse ? "tv-ml-8" : "tv-mr-8"}
              style={unBold && { fontFamily: "var(--Roboto_Medium)" }}
            >
              {icon !== "" && icon}
            </span>
          )}

          <span>{text}</span>
        </Link>
    )
  }
  const linkedOrUnLinkedButton=()=>{
    if(isLink){
      return(
        linkDom()
        
      )
    }
    else{
      return(
        <button
        type={type}
        id="tv-btn"
        disabled={disabled}
        className={`btn d-inline-flex align-items-center ${
          reverse ? "flex-row-reverse" : ""
        } ${additionalClass} ${size} ${btnBG} ${spacingClasses} ${
          outlined ? "tv-btn-outlined" : ""
        } ${rounded ? "tv-btn-rounded" : ""}`}
        onClick={togalModal}
      >
        {hasIcon && (
          <span className={reverse ? "tv-ml-8" : "tv-mr-8"}>
            {icon !== "" && icon}
          </span>
        )}

        <span>{text}</span>
      </button>

      )
    }
  }
  return (
    <>
      {linkedOrUnLinkedButton()}
    </>
  );
};

export default PrimaryButton;
