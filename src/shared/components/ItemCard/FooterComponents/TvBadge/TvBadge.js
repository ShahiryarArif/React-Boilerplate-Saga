import React from "react";
import Badge from "react-bootstrap/Badge";
import "./tv-badge.scss";

const TvBadge = ({ content, color }) => {
  return (
    <>
    {content?(
       <Badge id="tv-badge" className={`${color}`}>
       <p>{content}</p>
     </Badge>
    ):""}
    </>
  );
};

export default TvBadge;
