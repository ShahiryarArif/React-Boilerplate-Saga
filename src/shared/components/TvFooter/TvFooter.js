import { PlayStoreLogo, WindowsLogo } from "assets/SVGs/SVGs";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

import "./TvFooter.scss";

const TvFooter = () => {
  return (
    <>
      <footer className="tv-footer  ">
        <div className="tv-footer-content tv-container">
          <div className="tv-footer-content-top">
            {/*   <h5 className="mb-0">Quick Links</h5> */}
            <div className="d-flex flex-wrap justify-content-between ">
              <div className="d-flex-flex-column">
                <h5 className="tv-mb-12">Quick Links</h5>
                <ul className="tv-footer-quick-links-list d-flex flex-wrap tv-mb-18">
                  <li className="tv-footer-quick-links-item ">
                    <a href="/" className="tv-footer-quick-links-link">
                      Home
                    </a>
                  </li>
                  <li className="tv-footer-quick-links-item ">
                    <a
                      href="/introduction"
                      className="tv-footer-quick-links-link"
                    >
                      Introduction
                    </a>
                  </li>

                  <li className="tv-footer-quick-links-item ">
                    <a href="/" className="tv-footer-quick-links-link">
                      Marketplace
                    </a>
                  </li>
                  <li className="tv-footer-quick-links-item ">
                    <a href="/profile" className="tv-footer-quick-links-link">
                      Profile
                    </a>{" "}
                  </li>
                  {/* <a href="/" className="tv-footer-quick-links-link">
                  Activity
                </a>
                <li className="tv-footer-quick-links-item mb-3">
                  <a href="/" className="tv-footer-quick-links-link">
                    Settings
                  </a>
                </li>
                <li className="tv-footer-quick-links-item mb-3">
                  <a href="/" className="tv-footer-quick-links-link">
                    FAQ
                  </a>
                </li>

                <li className="tv-footer-quick-links-item mb-3">
                  {" "}
                  <a href="/" className="tv-footer-quick-links-link">
                    Blogs
                  </a>
                </li>

                <li className="tv-footer-quick-links-item mb-3">
                  {" "}
                  <a href="/" className="tv-footer-quick-links-link">
                    Blogs
                  </a>
                </li>
                <li className="tv-footer-quick-links-item mb-3">
                  {" "}
                  <a href="/" className="tv-footer-quick-links-link">
                    Contact Us
                  </a>
                </li> */}
                </ul>
              </div>

              <div className="tv-footer-btns d-flex align-items-center  flex-wrap">
                <PrimaryButton
                  type="button"
                  size="btn-lg"
                  text={
                    <h6 className="tv-footer-btns-text d-flex flex-column">
                      {" "}
                      <small>TERRA GALLERY</small> WINDOWS PC{" "}
                    </h6>
                  }
                  rounded={false}
                  outlined={false}
                  spacingClasses="tv-mr-16 mb-3"
                  additionalClass=""
                  hasIcon={true}
                  reverse={false}
                  icon={<WindowsLogo color={"var(--white)"} />}
                />
                <PrimaryButton
                  type="button"
                  size="btn-lg"
                  text={
                    <h6 className="tv-footer-btns-text d-flex flex-column">
                      {" "}
                      <small>TERRA GALLERY</small> WINDOWS PC{" "}
                    </h6>
                  }
                  rounded={false}
                  outlined={false}
                  spacingClasses="tv-mr-16 mb-3"
                  additionalClass=""
                  hasIcon={true}
                  reverse={false}
                  icon={<WindowsLogo color={"var(--white)"} />}
                />
                <PrimaryButton
                  type="button"
                  size="btn-lg"
                  text={
                    <h6 className="tv-footer-btns-text d-flex flex-column">
                      {" "}
                      <small>GET IT ON</small> PLAY STORE{" "}
                    </h6>
                  }
                  rounded={false}
                  outlined={false}
                  spacingClasses="tv-mr-16 mb-3"
                  additionalClass=""
                  hasIcon={true}
                  reverse={false}
                  icon={<PlayStoreLogo color={"var(--white)"} />}
                  togalModal={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.bim.terravirtua",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="tv-footer-content-bottom tv-pt-26 d-flex flex-column">
            <div className="row">
              <div className="col-md-8 mb-md-0 mb-3">
                <p className="">
                  Terra Virtua is a registered trademark of Terra Virtua
                  Limited. All logos are registered trademarks of their
                  respective owners. All contents of this document, unless
                  otherwise credited, are copyright © 2022 Terra Virtua Limited.
                </p>
              </div>
              <div className="col-md-3 offset-md-1 pe-0">
                <ul className="tv-footer-content-bottom-list d-flex flex-wrap ">
                  <li className="tv-footer-content-bottom-item">
                    <a
                      href="https://terravirtua.io/user-guidelines"
                      target="_blank"
                      className="tv-footer-content-bottom-link"
                    >
                      User Guidelines
                    </a>
                  </li>
                  <li className="tv-footer-bottom-item">
                    <a
                      href="https://terravirtua.io/privacy-policy"
                      className="tv-footer-bottom-link"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="tv-footer-bottom-item">
                    <a
                      href="https://terravirtua.io/terms-service"
                      className="tv-footer-bottom-link"
                      target="_blank"
                    >
                      Terms Of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="tv-footer-copyrights">
            All Rights Reserved. Terra Virtua.
          </p>
        </div>
      </footer>
    </>
  );
};

export default TvFooter;
