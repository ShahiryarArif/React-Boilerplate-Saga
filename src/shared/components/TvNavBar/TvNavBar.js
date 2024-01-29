import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ModeToggle,
  MagnifyGlass,
  LeftArrow,
  WhiteDiscrodLogo,
  WhiteLetterLogo,
  ArrowDownNavbar,
  CartLogo,
  Moon,
  Sun,
} from "../../../assets/SVGs/SVGs";

import "./TvNavBar.scss";
import SelectAvatar from "../../../assets/images/select-avatar-img3.png";
import TvLogo from "../../../assets/images/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import MobProfile from "./MobProfile/MobProfile";
import SmallButton from "./SmallButton/SmallButton";
import { Link, useHistory } from "react-router-dom";
import AuthModalContainer from "../../../containers/Auth/authContainer";
import Dropdown from "react-bootstrap/Dropdown";
import DesktopSearch from "../DesktopSearch/DesktopSearch";
import { validateJwtTokenCall } from "../../services/auth/authService";
import { setMarketplaceReferrer } from "redux/slice/shared-slice";
import AlgoliaMobileSearch from "../algoliaMobileSearch/algoliaMobileSearch";

const TvNavBar = ({ items, selectedItem, handleClickEvent }) => {
  /*Avatar Image From Local Storage */
  const data = JSON.parse(localStorage.getItem("userInfo"));
  const showLoginModal = false;
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [isDesktopSearch, setIsDesktopSearch] = useState(false);
  const [searchString, setsearchString] = useState("");
  const [activeTab, setActiveTab] = useState(selectedItem);
  const [token, setToken] = useState(null);
  const [showMarketDropdown, setShowMarketDropdown] = useState(false);
  const MarketDropdown = () => {
    setShowMarketDropdown(true);
  };
  const hidesetShowMarketDropdown = () => {
    setShowMarketDropdown(false);
  };

  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  useEffect(() => {
    verifyToken(localStorage.getItem("jwt_token"));
  }, []);

  const verifyToken = async (userToken) => {
    if (userToken === null) {
      setToken(null);
    } else {
      let response = await validateJwtTokenCall({
        jwt_token: userToken?.toString(),
      });
      if (response) {
        if (response.responseCode === 200) {
          setToken(response);
        } else {
          setToken(null);
        }
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("userID");
    localStorage.removeItem("userInfo");
    setToken(null);
    history.push("/");
  };

  function redirectToDiscord() {
    window.open("https://discord.com/invite/Pw7ffZe", "_blank");
  }
  function redirectoToTelegram() {
    window.open("https://t.me/terravirtua", "_blank");
  }

  const smallButtonHandler = () => {
    history.push("/user/cart");
  };
  const itemsInCart = useSelector((state) => state.cart.cartItems.length); //return the number of items in cart, used to show the count on cart icon

  const getMarketplaceReferrerForm = (buttonName) => {
    //Used to convert the buttonName to shared variable marketplaceReferrer's desired form as handled on listCollections.js
    if (buttonName === "Collectibles") return "collectibles";
    else if (buttonName === "Artwork") return "artwork";
    else if (buttonName === "Comics") return "comics";
  };

  const closeDesktopSearch = () => {
    setIsDesktopSearch(false);
    setsearchString("");
  };
  const closeMobileSearch = () => {
    setShowSearch(false);
  };

  useEffect(async () => {
    setActiveTab(selectedItem);
  }, [selectedItem]);
  const activeClassSetter = (title) => {
    if (activeTab === title) return "active";
    else return "";
  };
  const actionDispatcher = (dd) => {
    dispatch(setMarketplaceReferrer(getMarketplaceReferrerForm(dd)));
  };

  useLayoutEffect(() => {
    setDarkMode(localStorage.getItem("theme-mode") === "dark" ? true : false);
  }, []);

  const themeToggleHandler = () => {
    const getCurrentState = document
      .querySelector("html")
      .getAttribute("theme-mode");
    document
      .querySelector("html")
      .setAttribute(
        "theme-mode",
        getCurrentState === "dark" ? "light" : "dark"
      );

    setDarkMode(getCurrentState === "dark" ? false : true);
    localStorage.setItem(
      "theme-mode",
      getCurrentState === "dark" ? "light" : "dark"
    );
  };

  const navbarWideDom = () =>
    items &&
    items.map((item, index) => {
      return item.dropdownItems.length === 0 ? (
        <div
          key={item.title}
          className={` tv-navbar-item ${activeClassSetter(item.title)} `}
          key={`tv-navbar-item_${index}`}
        >
          <Link
            to={item.href}
            key={`navlink_${index}`}
            onClick={(e) => {
              return handleClickEvent(item.title, item.href);
            }}
          >
            {item.title}
          </Link>
        </div>
      ) : (
        <div
          className={` tv-navbar-item  ${activeClassSetter(item.title)} `}
          key={`tv-navbar-item_${index}`}
          onClick={(e) => handleClickEvent(item.title, item.href)}
        >
          <NavDropdown
            show={showMarketDropdown}
            onMouseEnter={MarketDropdown}
            onMouseLeave={hidesetShowMarketDropdown}
            title={
              <>
                {item.title}
                <span className="tv-ml-12"></span>
                <ArrowDownNavbar />
              </>
            }
            id="basic-nav-dropdown"
            onClick={() => (window.location = item.href)}
            className="d-flex align-items-center"
          >
            {item.dropdownItems.map((dditem, i) => {
              return (
                <NavDropdown.Item
                  href={item.dropDownHref[i]}
                  key={`navdropdownItem${i}`}
                  onClick={() => {
                    actionDispatcher(dditem);
                  }}
                >
                  {dditem}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </div>
      );
    });

  return (
    <header className="tv-container-nav">
      <div className="tv-navbar">
        <Navbar expand="lg" className="d-flex align-items-center">
          <div className="tv-pt-16 tv-pb-16">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
              {" "}
              <Link
                to="/introduction"
                onClick={(e) => {
                  return handleClickEvent("", "/introduction");
                }}
              >
                <img src={TvLogo} alt="TV Logo" className="tv-mr-12" />
              </Link>
            </Navbar.Brand>
          </div>

          <div className="tv-navbar-wide">
            <Nav className="me-auto">{navbarWideDom()}</Nav>
          </div>
          <div className="tv-navbar-md">
            <Nav className="me-auto">
              {items &&
                items.slice(0, items.length / 2).map((item, idx) => {
                  return item.dropdownItems.length === 0 ? (
                    <div
                      className={` tv-navbar-item ${activeClassSetter(
                        item.title
                      )} `}
                      key={`tv-navbar-item_${idx}`}
                    >
                      <Link
                        to={item.href}
                        key={`navlink_${idx}`}
                        onClick={(e) => {
                          return handleClickEvent(item.title, item.href);
                        }}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={` tv-navbar-item  ${activeClassSetter(
                        item.title
                      )} `}
                      key={`tv-navbar-item_${idx}`}
                      onClick={(e) => handleClickEvent(item.title, item.href)}
                    >
                      <NavDropdown
                        show={showMarketDropdown}
                        onMouseEnter={MarketDropdown}
                        onMouseLeave={hidesetShowMarketDropdown}
                        title={
                          <>
                            {item.title}
                            <span className="tv-ml-12"></span>
                            <ArrowDownNavbar />
                          </>
                        }
                        id="basic-nav-dropdown"
                        onClick={() => (window.location = item.href)}
                        className="d-flex align-items-center"
                      >
                        {item.dropdownItems.map((dditem, ind) => {
                          return (
                            <NavDropdown.Item
                              href={item.dropDownHref[ind]}
                              key={`navdropdownItem${ind}`}
                              onClick={() => {
                                actionDispatcher(dditem);
                              }}
                            >
                              {dditem}
                            </NavDropdown.Item>
                          );
                        })}
                      </NavDropdown>
                    </div>
                  );
                })}
              <div className="tv-navbar-item">
                <NavDropdown
                  title={
                    <>
                      More
                      <span className="tv-ml-12">
                        <ArrowDownNavbar />
                      </span>
                    </>
                  }
                  id="basic-nav-dropdown"
                  className="d-flex align-items-center"
                >
                  {items &&
                    items
                      .slice(items.length / 2, items.length)
                      .map((item, index) => {
                        return (
                          <NavDropdown.Item
                            href={item.href}
                            key={`navdropdownItem${index}`}
                          >
                            {item.title}
                          </NavDropdown.Item>
                        );
                      })}
                </NavDropdown>
              </div>
            </Nav>
          </div>
          <div className="tv-navbar-sm">
            <Nav className="me-auto">
              {items &&
                items.slice(0, items.length / 3).map((item, index) => {
                  return item.dropdownItems.length === 0 ? (
                    <div
                      className={`tv-navbar-item ${activeClassSetter(
                        item?.title
                      )} `}
                      key={`tv-navbar-item_${index}`}
                    >
                      <Link
                        to={item.href}
                        key={`navlink_${index}`}
                        onClick={(e) => {
                          return handleClickEvent(item.title, item.href);
                        }}
                      >
                        {item.title}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className={` tv-navbar-item  ${activeClassSetter(
                        item?.title
                      )} `}
                      key={`tv-navbar-item_${index}`}
                      onClick={(e) => handleClickEvent(item.title, item.href)}
                    >
                      <NavDropdown
                        show={showMarketDropdown}
                        onMouseEnter={MarketDropdown}
                        onMouseLeave={hidesetShowMarketDropdown}
                        title={
                          <>
                            {item.title}
                            <span className="tv-ml-12"></span>
                            <ArrowDownNavbar />
                          </>
                        }
                        id="basic-nav-dropdown"
                        onClick={() => (window.location = item.href)}
                        className="d-flex align-items-center"
                      >
                        {item.dropdownItems.map((dditem, idex) => {
                          return (
                            <NavDropdown.Item
                              href={item.dropDownHref[idex]}
                              key={`navdropdownItem${idex}`}
                              onClick={() => {
                                actionDispatcher(dditem);
                              }}
                            >
                              {dditem}
                            </NavDropdown.Item>
                          );
                        })}
                      </NavDropdown>
                    </div>
                  );
                })}
              <div className="tv-navbar-item">
                <NavDropdown
                  title={
                    <>
                      More
                      <span className="tv-ml-12">
                        <ArrowDownNavbar />
                      </span>
                    </>
                  }
                  id="basic-nav-dropdown"
                  className="d-flex align-items-center"
                >
                  {items &&
                    items
                      .slice(items.length / 3, items.length)
                      .map((itemData, index) => {
                        return (
                          <NavDropdown.Item
                            href={itemData.href}
                            key={`navdropdownItem${index}`}
                          >
                            {itemData.title}
                          </NavDropdown.Item>
                        );
                      })}
                </NavDropdown>
              </div>
            </Nav>
          </div>

          <ul className="tv-navbar__buttons ms-auto">
            <li className="tv-ml-12 tv-discord-btn" onClick={redirectToDiscord}>
              <SmallButton isRound extraClasses={"bg-discord"}>
                <WhiteDiscrodLogo />
              </SmallButton>
            </li>
            <li
              className="tv-ml-12 tv-telegram-btn"
              onClick={redirectoToTelegram}
            >
              <SmallButton isRound extraClasses={"bg-letter"}>
                <WhiteLetterLogo />
              </SmallButton>
            </li>
          </ul>

          <div className="tv-navbar-search tv-ml-12 ">
            <span className="tv-navbar-search-bar-icon">
              <MagnifyGlass color="#95A2B4" />
            </span>
            <input
              style={{ width: "350px" }}
              type="text"
              className="tv-navbar-search-bar"
              placeholder="Search by brand, item or collection "
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  setIsDesktopSearch(!isDesktopSearch);
                  setsearchString(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>

          {isDesktopSearch && (
            <DesktopSearch
              desktopSearch={closeDesktopSearch}
              searchString={searchString}
            />
          )}
          <ul className="tv-navbar__buttons">
            <li className="tv-ml-12 position-relative">
              {itemsInCart > 0 && (
                <span className="rounded-badge green text-badge">
                  {itemsInCart}
                </span>
              )}
              <SmallButton togalModal={smallButtonHandler}>
                <CartLogo />
              </SmallButton>
            </li>

            <li className="tv-ml-12 position-relative">
              <SmallButton togalModal={themeToggleHandler}>
                {darkMode ? <Sun /> : <Moon />}
              </SmallButton>
            </li>

            <li className="tv-ml-12">
              <Dropdown className="avatar-dropdown-wrapper">
                <Dropdown.Toggle className="reset-style">
                  <SmallButton isRound>
                    <img
                      src={
                        data?.thumbnail_url ? data?.thumbnail_url : SelectAvatar
                      }
                      alt="Small Avatar "
                      className=""
                    />
                  </SmallButton>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {token === null ? (
                    <Dropdown.Item href="/login">Sign In</Dropdown.Item>
                  ) : (
                    <>
                      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item onClick={() => logout()}>
                        Logout
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>

          <h5 className="sm-search-hamburger mb-0">Marketplace</h5>

          {showLoginModal && <AuthModalContainer defaultModal={"signin"} />}
          <div className="sm-search-hamburger">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setShowSearch(!showSearch)}
              className="navbar-toggler-search tv-mr-8"
            />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleShow}
              className="navbar-toggler-nav"
            />
          </div>
          <Offcanvas
            show={showSearch}
            onHide={() => setShowSearch(!showSearch)}
            id="mob-offcanvas-body"
          >
            <Offcanvas.Header>
              <span
                className="tv-mr-8"
                onClick={() => setShowSearch(!showSearch)}
              >
                <LeftArrow />
              </span>

              {showSearch && (
                <AlgoliaMobileSearch mobileSearch={closeMobileSearch} />
              )}
            </Offcanvas.Header>
          </Offcanvas>

          <Offcanvas show={show} onHide={handleClose} id="mob-offcanvas-body">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <>
              <div className="mobProfile">
                {token !== null && (
                  <MobProfile
                    name={data?.name}
                    status="Bronze"
                    //status={data?.prestigeLevel}
                    walletValue={data?.terawallet}
                    avatar={data?.thumbnail_url}
                    activities="03"
                    cartItems={itemsInCart}
                  />
                )}
                {itemsInCart > 0 ? (
                  <>
                    <SmallButton togalModal={smallButtonHandler}>
                      <span className="rounded-badge green text-badge">
                        {itemsInCart}
                      </span>
                      <CartLogo />
                    </SmallButton>
                  </>
                ) : (
                  <>
                    <div className="mobProfile-icon-box-content d-flex align-items-center">
                      <SmallButton togalModal={smallButtonHandler}>
                        <CartLogo />
                      </SmallButton>
                      <div className="mobProfile-icon-text tv-ml-8">
                        {"No item in cart"}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <div className="tv-navbar-item">
                  <Nav.Link href="/introduction">Introduction</Nav.Link>
                </div>

                <div className="tv-navbar-item">
                  <Nav.Link href="/marketplace">MarketPlace</Nav.Link>
                </div>
                <div className="tv-navbar-item">
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </div>
                <div className="tv-navbar-item">
                  <Nav.Link href="/collections">Collections</Nav.Link>
                </div>
                <div className="tv-navbar-item">
                  <Nav.Link href="/packs">Packs</Nav.Link>
                </div>
                <div className="tv-navbar-item">
                  <Nav.Link href="/trading">Trading</Nav.Link>
                </div>
                <div className="tv-navbar-item">
                  <Nav.Link href="#home">Kolect Token</Nav.Link>
                </div>
                <div className="tv-navbar-item">
                  <Nav.Link href="#home">Blog</Nav.Link>
                </div>
                <div className="tv-navbar-item ">
                  <Nav.Link
                    href="#home"
                    className="d-flex  align-items-center justify-content-between"
                  >
                    {" "}
                    <span className="dark-mode-toggler d-flex align-items-center ">
                      <ModeToggle />
                      Dark Mode
                    </span>
                    <div class="form-switch">
                      <div className="theme-mode-switch">
                        <span>{darkMode ? "on" : "off"}</span>
                        &nbsp;&nbsp;
                        <input
                          type="checkbox"
                          id="theme-mode-switch-label"
                          checked={darkMode}
                          onChange={themeToggleHandler}
                        />
                        <label for="theme-mode-switch-label"></label>
                      </div>
                    </div>
                  </Nav.Link>
                </div>
                <div className="tv-navbar-item tv-mt-60">
                  {token === null ? (
                    <Nav.Link href="/login">Sign In</Nav.Link>
                  ) : (
                    <>
                      <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                    </>
                  )}
                </div>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </div>
    </header>
  );
};

export default TvNavBar;
