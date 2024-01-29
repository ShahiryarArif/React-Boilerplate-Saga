import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Close } from "../../../../assets/SVGs/SVGs";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import "../modals.scss";
import TVUserAvatar from "../../../../modules/UserProfile/components/TVUserAvatar/TVUserAvatar";
import FullLoader from "shared/FullLoader/FullLoader";

const TVColorAvatarPopup = ({ isInitiallyOpend,closeForm, data, updateAvatar, 
  onboarding,loader, handler, handleLoader, resetAvatarStatus}) => {
  const [modalToggle, setModalToggle] = useState(isInitiallyOpend);
  const [avatarsState, setavatarsState] = useState(undefined)
  const [selectedAvatar, setselectedAvatar] = useState(undefined)

  const handleSelectedAvatar = async (img) => {
    setselectedAvatar(img)
  }

  const setAvatarDom = () => {
    setavatarsState(data.avatars.map((avatar, index) => (
      <div
      className="col-4 col-sm-2 col-lg-3 d-inline-flex justify-content-center"
      key={index}
    >
        <div className="tv-ca-individual">
          <label>
            <input type="radio" name="choose-avatar" />
            <div className="tv-ca-inner">
              <TVUserAvatar
                imgUrl={avatar.thumbnail_url}
                size="tv-user-avatar-xs"
                isDownloadBtn={false}
                additionalClass=""
                handler = {(img) => handleSelectedAvatar(img)}
              />
            </div>
          </label>
        </div>
      </div>
    )))
  }

  const updateUserAvatar = async () => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    user['thumbnail_url'] = selectedAvatar
    localStorage.setItem('userInfo', JSON.stringify(user))
    resetAvatarStatus()
    await handleLoader(true)
    updateAvatar({thumbnail_url: selectedAvatar})
    // setModalToggle(false)
  }

  useEffect(() => {
   if(avatarsState === undefined) {
    setAvatarDom()
   }
  }, [])


  useEffect(() => {
   if(onboarding.updateAvatarStatus !== 'idle') {
      handleLoader(false) 
   }
  }, [onboarding.updateAvatarStatus])

  const handleCloseButton = () => {
    setModalToggle(false)
    closeForm()
  }

  return (
    <>
     {loader && <FullLoader />}
    <Modal
      className="tv-alert-modal-wrapper tv-modal-lg"
      show={modalToggle}
      onHide={() => {
        setModalToggle(false)
        closeForm()
      }}
      centered
    >
      <Modal.Header className="justify-content-end pb-0">
        <Button
          variant="default"
          className="p-0"
          onClick={() => {
            setModalToggle(false)
            closeForm()
          }}
        >
          <Close/>
        </Button>
      </Modal.Header>
      <Modal.Body className="tv-px-20">
        <h4 className="tv-mb-30">Display Picture</h4>
        <TVUserAvatar
          imgUrl={data.user.thumbnail_url}
          size="tv-user-avatar-md"
          isDownloadBtn={true}
          additionalClass="tv-user-avatar-download tv-mt-40"
          handler = {(img) => handleSelectedAvatar(img)}

        />

        <div className="tv-color-avatar-wrapper tv-mt-36">
          <div className="row row-gutter-30">
            <div className="col-lg-12 tv-mb-20">
              <div className="tv-choose-avatar-wrapper">
                <strong>Choose avatar</strong>
                <div className="tv-choose-inner">
                  {avatarsState && <div className="row ">
                    {avatarsState}
                  </div>}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 tv-mb-20">
              <div className="tv-choose-bg-wrapper">
                <strong>Choose color</strong>
                <div className="tv-choose-inner">
                  <div className="row">
                    {[
                      "#ED392E",
                      "#FFB600",
                      "#6A56E5",
                      "#1FD367",
                      "#0085FF",
                      "#FF8A00",
                      "#AF52DE",
                      "linear-gradient(90deg, #FB0131 0%, #8B1EC8 100%)",
                    ].map((item) => (
                      <div
                        className="col-4 col-sm-2 col-lg-6 d-inline-flex justify-content-center"
                        key={item}
                      >
                        <div className="tv-ca-individual">
                          <ColorSelectionRadio color={item} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="tv-px-20 py-0">
        <PrimaryButton
          type="button"
          size="btn-lg"
          text="Cancel"
          rounded={false}
          outlined={false}
          btnBG="tv-btn-default"
          spacingClasses="tv-mr-16"
          additionalClass=""
          hasIcon={false}
          reverse={false}
          icon=""
          togalModal = {handleCloseButton}
        />
        {selectedAvatar && <PrimaryButton
          type="button"
          size="btn-lg"
          text="Save Changes"
          rounded={false}
          outlined={false}
          btnBG="tv-btn-dark"
          spacingClasses=""
          additionalClass="m-0"
          hasIcon={false}
          reverse={false}
          icon=""
          togalModal = {updateUserAvatar}
        />}
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default TVColorAvatarPopup;
