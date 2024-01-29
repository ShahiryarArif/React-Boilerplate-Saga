import React from "react";
import "./NotFound.scss";
import IconNotFound from "../../../assets/images/Icon_NotFound.svg";

const NotFound = ({ description, title }) => {
  return (
    <div className="row tv-py-60">
      <div className="col-12 search-notfound">
        <img src={IconNotFound} alt="Icon_NotFound" />
        <h4 className="tv-mt-20 search-notfound-title">
          {title ? title : "No Items Found"}
        </h4>
        <p className="tv-mt-20">
          {description
            ? description
            : "Sorry, but the item you're looking for doesn't exist. Try changing the search terms."}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
