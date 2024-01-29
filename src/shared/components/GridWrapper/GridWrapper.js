import React from "react";
import "./gridwrapper.scss";

const GridWrapper = ({
  children,
  wideWrapper,
  midWideWrapper,
  extraWideWrapper,
}) => {
  return (
    <>
    {children?(
    <div className="row tv-mt-20 tv-pb-80">{children}</div>
    ):""}
    </>
    // <div
    //   className={`grid-wrapper ${
    //     wideWrapper
    //       ? "grid-wrapper-wide"
    //       : midWideWrapper
    //       ? "grid-wrapper-md"
    //       : extraWideWrapper
    //       ? "grid-wrapper-ex-wide"
    //       : " "
    //   }`}
    // >
    //   {children && children}
    // </div>
  );
};

export default GridWrapper;

/* grid-area: 2 / 1 / span end / span end; */
