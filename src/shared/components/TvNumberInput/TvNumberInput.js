import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownArrowSmall, UpArrowSmall } from "../../../assets/SVGs/SVGs";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { pushNotification } from "utils/notifications";
import { validateJwtTokenCall } from "shared/services/auth/authService";
import "./tvNumberInput.scss";

const TvNumberInput = ({ haveBidBtn, priceSubText, placeBidAction, auctionID, disable, handleInputChange, bidIsPlacing }) => {
  const [numberValue, setNumberValue] = useState(0);
  async function verifySession() {
    let token = localStorage.getItem("jwt_token");
    if (token === null) {
      document.location = "/login";
    } else {
      let response = await validateJwtTokenCall({
        jwt_token: token?.toString(),
      });
      if (response) {
        if (response.responseCode === 200) {
          return true;
        } else {
          document.location = "/login";
        }
      }
    }
  }
  const handleClick = async () => {
    if (await verifySession()) {
      let value = parseFloat(numberValue);
      if (value > priceSubText) {
        /*Body Setter */
        const body = { auctionid: auctionID.toString(), price: value.toString() };
        /*ACtion Dispatch */
        placeBidAction(body);
        setNumberValue(0);
      } else {
        pushNotification(`Price Should Be Greater Top Bid`, "error", "TOP_CENTER");
        setNumberValue(0);
      }
    }
  };
  return (
    <>
      <div id='tvNumberInput'>
        <div class='input-group flex-nowrap'>
          <span class='input-group-text d-flex align-items-center justify-content-center'>
            <div className='input-group-text-left tv-mr-10'>USD $</div>
            <div className='input-group-text-right d-flex flex-column justify-content-around'>
              <Link
                to='#'
                onClick={() => {
                  setNumberValue(parseFloat(numberValue) + 1);
                  handleInputChange(numberValue + 1);
                }}
              >
                <UpArrowSmall />
              </Link>
              <Link
                to='#'
                onClick={() => {
                  if (parseInt(numberValue) !== 0) {
                    setNumberValue(parseFloat(numberValue) - 1);
                    handleInputChange(numberValue - 1);
                  }
                }}
              >
                <DownArrowSmall />
              </Link>
            </div>
          </span>
          <div className='tvNumberInput-input-wrapper'>
            <input
              placeholder={parseInt(numberValue) === 0 ? "Enter a value" : numberValue}
              id='inlineFormInputGroup'
              class=' tvNumberInput-input form-control'
              type='number'
              min='0'
              value={numberValue === 0 ? "" : numberValue}
              onChange={(e) => {
                setNumberValue(e.target.value);
                handleInputChange(e.target.value);
              }}
            />
            {haveBidBtn && (
              <div className='tvNumberInput-bid tv-p-8'>
                <PrimaryButton
                  type='button'
                  size='btn-sm'
                  text='Bid'
                  disabled={disable}
                  rounded={false}
                  outlined={false}
                  btnBG='tv-btn-outlined'
                  spacingClasses=''
                  hasIcon={false}
                  reverse={false}
                  togalModal={handleClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TvNumberInput;
