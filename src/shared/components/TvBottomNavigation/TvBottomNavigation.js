import React from "react";
import { Link } from "react-router-dom";
import "./TvBottomNavigation.scss";

const TvBottomNavigation = ({ items }) => {
  return (
    <div className="d-block d-sm-none">
      <ul className="btm-nav btm-nav-list d-flex align-items-center justify-content-between w-100 tv-px-24">
        {items &&
          items.map((item, index) => {
            return (
              <li className="btm-nav-item" key={index}>
                <Link
                  to={item.to}
                  className={`btm-nav-link ${
                    item.active && "active"
                  }  d-flex flex-column  align-items-center`}
                >
                  {" "}
                  <span className="tv-mb-6">{item.icon}</span>
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TvBottomNavigation;
