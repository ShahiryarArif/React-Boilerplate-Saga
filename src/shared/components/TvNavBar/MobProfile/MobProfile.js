import React from "react";
import "./mobProfile.scss";
import SmallButton from "../SmallButton/SmallButton";
import { BellLogo } from "../../../../assets/SVGs/SVGs";

/* the mobile version of user profile */

const MobProfile = ({
  name,
  status,
  walletValue,
  activities,
  cartItems,
  avatar,
}) => {
  return (
    <>
      <div className="mobProfile-top tv-mb-16">
        <div className="mobProfile-info d-flex justify-content-between">
          <div className="mobProfile-left d-flex align-items-center">
            <a href="/profile">
              {" "}
              <img src={avatar} alt="Profile Image" />
            </a>
            <div className="mobProfile-name-box tv-ml-12">
              <div className="mobProfile-name tv-bt-2">{name ? name : ""}</div>
              <div className="mobProfile-status">{status ? status : ""}</div>
            </div>
          </div>
          <div className="mobLeft-right text-left d-flex flex-column justify-content-center">
            <div className="mobProfile-value tv-mb-2">
              {walletValue ? walletValue : ""}
            </div>
            <div className="mobProfile-status">Terra Wallet</div>
          </div>
        </div>
      </div>
      <div className="mobProfile-top ">
        <div className="mobProfile-btm d-flex ">
          <div className="mobProfile-icon-box tv-pr-18  ">
            <div className="mobProfile-icon-box-content d-flex align-items-center">
              <SmallButton hasGreenLight>
                <BellLogo />
              </SmallButton>
              <div className="mobProfile-icon-text tv-ml-8">
                {activities ? activities : ""} Activites
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobProfile;
