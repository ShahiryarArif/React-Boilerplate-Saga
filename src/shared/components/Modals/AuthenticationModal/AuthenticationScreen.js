import React, { useState, useEffect } from "react";
import "./authenticationModal.scss";
import { validateJwtTokenCall } from "../../../services/auth/authService";
import Loader from "react-loader-spinner";
import AuthModalContainer from "../../../../containers/Auth/authContainer";

const AuthenticationScreen = (props) => {
  const [authed, setAuthed] = useState({ token: null, loading: true });
  const verifyToken = async (token) => {
    if (token === null) {
      setAuthed({ token: null, loading: false });
    } else {
      let response = await validateJwtTokenCall({
        jwt_token: token?.toString(),
      });
      if (response) {
        if (response.responseCode === 200) {
          props?.history?.push("/");
          setAuthed({ token: response, loading: false });
        } else {
          setAuthed({ token: null, loading: false });
        }
      }
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("jwt_token");
    verifyToken(token);
  }, []);

  return authed.loading ? (
    <div className="small-loader d-flex align-items-center justify-content-center">
      <Loader type="Oval" color="#00ec93" height={100} width={100} />
    </div>
  ) : (
    <AuthModalContainer defaultModal={"signin"} />
  );
};

export default AuthenticationScreen;
