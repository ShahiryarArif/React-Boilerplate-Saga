import React from "react";
import Badge from "react-bootstrap/Badge";
import "./badge.scss";

const TvBadge = ({
  children,
  onTop,
  isSmall,
  colorClass,
  isSimple,
  extraClasses,
}) => {
  return (
    <div
      id="tv-badge"
      className={`tv-badge ${onTop ? "tv-badge-be-on-top" : ""}  ${
        isSmall ? "tv-badge-small" : ""
      } ${colorClass} ${isSimple ? "tv-badge-simple" : ""} `}
    >
      <Badge
        className={`${extraClasses ? extraClasses : ''} d-flex align-items-center`}
      >
        {children ? children : ''}
      </Badge>
    </div>
  );
};

export default TvBadge;
