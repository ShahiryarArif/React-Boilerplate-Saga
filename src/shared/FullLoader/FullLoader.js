import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const FullLoader = () => {
  return (
    <div className="full-loader d-flex align-items-center justify-content-center">
      <Loader type="Oval" color="#00ec93" height={100} width={100} />
    </div>
  );
};

export default FullLoader;
