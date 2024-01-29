import React from "react";
import "./profileNavbar.scss";
import { TopTriangle } from "../../../assets/SVGs/SVGs";

const ProfileNavbar = ({
  name,
  level,
  walletValue,
  assetsValue,
  growth,
  avatar,
}) => {
  return (
    <>
      <div className="header__info">
        <div className="d-flex align-items-center  header__info-imgBox">
          <div className="auth-profile-img">
            <img src={avatar} className="header__info-avatar" alt="" />
          </div>
          <div className="header__info-box tv-ml-8">
            <h5 className="header__name">{name ? name : ''}</h5>
            <p className="header__prestige">
              Prestige Level:
              <span
                className="header__prestige header__prestige-uncommon
              "
              >
                {" "}
                {level ? level : ''}
              </span>
            </p>
            <div id="header__smallScreen">
              <div className="d-flex align-items-center position-relative">
                <div className="header__assets-box">
                  <div className="header__assets-box-content">
                    <div className="header__assets-title">Terra Wallet</div>
                    <h5 className="header__assets-amount">
                      {walletValue && `USD ${walletValue}`}
                    </h5>
                  </div>
                </div>

                <div className="header__assets-box">
                  <div className="header__assets-title">Assets Worth</div>
                  <h5 className="header__assets-amount">
                    {assetsValue ? assetsValue : ''}
                  </h5>
                  <p className="header__assets-growth d-flex align-items-center">
                    <TopTriangle />
                    <strong>{growth ? growth : ''}</strong>
                    {"  "} in 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header__wideScreen">
          <div className="d-flex">
            <div className="header__assets-box">
              <div className="header__assets-box-content">
                <div className="header__assets-title">
                  <span>Terra Wallet</span>
                </div>
                <h5 className="header__assets-amount">
                  {walletValue && `USD ${walletValue}`}
                </h5>
              </div>
            </div>
            {/* Code comented untill Ammount is not showing in dashboard top-right  */}
            {/* <div className="header__assets-box">
              <div className="header__assets-title">
                {" "}
                <span>Assets Worth</span>
              </div>
              <h5 className="header__assets-amount">
                {assetsValue && assetsValue}
              </h5>
              <p className="header__assets-growth d-flex align-items-center">
                <TopTriangle />
                <strong>{growth && growth}</strong>
                {"  "} in 24 hours
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileNavbar;
