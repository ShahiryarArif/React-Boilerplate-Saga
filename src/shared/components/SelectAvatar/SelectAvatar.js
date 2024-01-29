import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./selectAvatar.scss";
import { Carousel } from "3d-react-carousal";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { useHistory } from "react-router";
import { AUTH_API_ACCESS_TOKEN } from "shared/constants/localstorage-keys";
import FullLoader from "shared/FullLoader/FullLoader";
import { pushNotification } from "utils/notifications";

const SelectAvatar = (props) => {
  const token = props.match.params.token;
  const [sliceDom, setsliceDom] = useState(undefined);
  const [avatar, setavatar] = useState(undefined);
  const [avatarSelectedFlag, setavatarSelectedFlag] = useState(false);
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem(AUTH_API_ACCESS_TOKEN, token);
    if (props.onboarding.status === "idle") {
      props.validateToken(token);
      if (props.onboarding.avatarlistStatus === "idle") {
        props.listAvatar({});
      }
    }
  }, [token]);

  useEffect(() => {
    if (props.onboarding.status === "failure") {
      /** redirect to 404 */
      history.push("/not-found");
    } else if (props.onboarding.status === "succeeded") {
      setSlides(props.onboarding.listAvatar);
      if (props.onboarding.userStatus === true) {
        /** redirect to login */
        history.push("/login");
      }
    }
  }, [props.onboarding]);

  const selectAvatar = async (selectedAvatar) => {
    setavatar(selectedAvatar);
    // pushNotification(`${avatar.name} has been selected`,"success","TOP_CENTER")
  };

  useEffect(() => {
    if (history.location.pathname.includes("select-avatar")) {
      if (props.onboarding.userAvatar !== "" && props.onboarding.updateAvatarStatus === "succeeded") {
        setavatarSelectedFlag(false);
        pushNotification("Your avatar has been saved", "success", "TOP_CENTER");
        history.push("/login");
      } else if (props.onboarding.updateAvatarStatus === "failure") {
        setavatarSelectedFlag(false);
        pushNotification("Some error has occured", "error", "TOP_CENTER");
      }
    }
  }, [props.onboarding.userAvatar, props.onboarding.updateAvatarStatus]);

  const callUpdateAvatar = (UpdatedAvatar) => {
    setavatarSelectedFlag(true);
    props.updateAvatar({ thumbnail_url: UpdatedAvatar.thumbnail_url });
  };

  const setSlides = (list) => {
    const dom = list.map((avat) => {
      return (
        <div
          style={{ cursor: "pointer" }}
          className='d-flex flex-column align-items-center tv-mt-40'
          onClick={() => selectAvatar(avat)}
        >
          <img src={avat.thumbnail_url} style={{ height: "300px" }} alt='1' />
          <h5 className='text-white tv-mt-16'>{avat.name}</h5>
        </div>
      );
    });
    let data = <Carousel slides={dom} autoplay={false} />;
    setsliceDom(data);
  };

  return (
    <>
      {sliceDom !== undefined && (
        <Layout>
          <div className='select-avatar-wrapper'>
            <div className='tv-pt-80 d-flex flex-column justify-content-center'>
              <div className='d-flex flex-column align-items-center justify-content-center text-center'>
                <h3 className='text-white'>Welcome to Terra Virtua!</h3>
                <p className='text-white'>Choose a vFlect to represent you in Terra Virtua</p>
              </div>
              {sliceDom}
              <div className='d-flex align-items-start justify-content-center'>
                {avatar && (
                  <PrimaryButton
                    type='button'
                    size='btn-lg'
                    text='Save Avatar'
                    rounded={false}
                    outlined={false}
                    btnBG='tv-btn-gradient'
                    spacingClasses=''
                    additionalClass='tv-mb-80 tv-mt-40'
                    hasIcon={true}
                    reverse={true}
                    togalModal={() => callUpdateAvatar(avatar)}
                  />
                )}
              </div>
            </div>
          </div>
        </Layout>
      )}
      {sliceDom === undefined && <FullLoader />}
      {avatarSelectedFlag && <FullLoader />}
    </>
  );
};

export default SelectAvatar;
