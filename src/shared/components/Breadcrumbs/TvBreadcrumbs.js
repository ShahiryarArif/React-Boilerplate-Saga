import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../../assets/SVGs/SVGs";
import "./breadcrumbs.scss";


const TvBreadcrumbs = ({ items, leftArrow }) => {

  const handleClick = async () => {
     window.history.back()
  }

  return (
    <div id="tv-breadcrumb">
      <div className="tv-breadcrumb-large tv-container ">
        <Breadcrumb>
          {!leftArrow && (
            <a className="tv-breadcrumb__arrow" onClick = {() => handleClick()}><LeftArrow /> </a>
          )}

          {items &&
            items.map((item, index) => {
              return item.active ? (
                <Breadcrumb.Item id={index} active href = '/'>
                  {item.title}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item id={index} href = '/'>
                  {item.title}
                </Breadcrumb.Item>
              );
            })}
        </Breadcrumb>
      </div>

      <div className="tv-breadcrumb-small">
        <Breadcrumb>
          {!leftArrow && (
            <Link to="/" className="tv-breadcrumb__arrow">
              <LeftArrow />
            </Link>
          )}
          {items &&
            items.map((itemData, index) => {
              return itemData.active ? (
                <Breadcrumb.Item id={index} active href="/">
                  {itemData.title}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item id={index} href="/">
                  {itemData.title}
                </Breadcrumb.Item>
              );
            })}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default TvBreadcrumbs;
