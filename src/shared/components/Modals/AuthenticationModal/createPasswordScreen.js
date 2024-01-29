import AuthModalContainer from "../../../../containers/Auth/authContainer";
import React, { useEffect, useState } from "react";
import { validateTokenCall } from "shared/services/auth/authService";
import FullLoader from "shared/components/FullLoader/FullLoader";

let response;
const CreatePasswordScreen = (props) => {
  //Only the token is being fetched from props
  const [tokenValidity, setTokenValidity] = useState(undefined);
  const [isTokenValidated, setIsTokenValidated] = useState(false); //To check if the network call is completed, meanwhile spinner will run
  useEffect(() => {
    const verifyToken = async () => {
      response = await validateTokenCall({
        jwt_token: props.match.params.token,
      });
      if (response) {
        setIsTokenValidated(true);
        if (response.responseCode === 200) {
          setTokenValidity(true);
        } else {
          setTokenValidity(false);
        }
      }
    };
    verifyToken();
  }, []);

  return (
    <div>
      {!isTokenValidated && <FullLoader />}
      {tokenValidity === true && (
        <AuthModalContainer
          defaultModal={"createPassword"}
          match={props.match} //Sending match props to fetch the jwt from query param
        />
      )}
      {tokenValidity === false && (
        <AuthModalContainer defaultModal={"invalidToken"} />
      )}
    </div>
  );
};

export default CreatePasswordScreen;
