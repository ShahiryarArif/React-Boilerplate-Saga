import React from "react";
import "./pageNotFound.scss";
import NotFound from "assets/images/404.png";
import Layout from "../Layout/Layout";

function PageNotFound() {
  return (
    <Layout>
      <div className="notfound-page-wrapper">
        <h1 className="tv-mb-26">Oops!</h1>
        <h5 className="tv-mb-20">Something Went Wrong.</h5>
        <p>Error 404 Page Not Found</p>
        <div><img src={NotFound} alt="404" /></div>
      </div>
    </Layout>
  );
}
export default PageNotFound;
