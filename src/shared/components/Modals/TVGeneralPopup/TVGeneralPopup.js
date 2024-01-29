import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { Close, Download } from "../../../../assets/SVGs/SVGs";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import Gift from "../../../../assets/images/gift.svg";
import Alert from "../../../../assets/images/alert.svg";
import "../modals.scss";
import TVUserAvatar from "../../../../modules/UserProfile/components/TVUserAvatar/TVUserAvatar";

const TVGeneralPopup = ({
  isInitiallyOpend,
  title,
  description,
  illustration,
  isProfilePopup,
  updateHookInParent,
  deleteHandler,
  profile,
  handler 
}) => {

  const [modalToggle, setModalToggle] = useState(isInitiallyOpend);
  const buttonText=illustration === "alert" ? "confirm" : "Redeem"
  const onClick=()=> {
       deleteHandler()
       
       }
  const checkModalIllustration = (checkIllustration) => {
    switch (checkIllustration) {
      case "gift":
        return Gift;
      case "alert":
        return Alert;

      default:
        break;
    }
  };
  const downloadImage = () => {
    saveAs(profile, 'profile.jpg') // Put your image url here.
  }

  return (
    <Modal
      className="tv-alert-modal-wrapper"
      show={modalToggle}
      onHide={() =>{
        updateHookInParent()
        setModalToggle(false)
      }
      }
        
      centered
    >
      <Modal.Header className="justify-content-end pb-0">
        <Button
          variant="default"
          className="p-0"
          onClick={() =>{
            updateHookInParent()
            setModalToggle(false)}}
        >
          <Close />
        </Button>
      </Modal.Header>
      <Modal.Body className="tv-px-20">
        {isProfilePopup ? (
          <>
            <h4>Display Picture</h4>
            <TVUserAvatar
              imgUrl={profile}
              size="tv-user-avatar-lg tv-mt-40"
              isDownloadBtn={false}
              additionalClass=""
              handler ={handler}
            />
          </>
        ) : (
          <div className="tv-modal-body-content">
            <img
              src={checkModalIllustration(illustration)}
              alt="modal illustration"
              className="tv-mb-40"
            />
            <h4 className="tv-mb-20">{title}</h4>
            <p>{description}</p>
            {illustration === "gift" && (
              <FloatingLabel
                className="tv-mt-30"
                controlId="floatingInput"
                label="Enter Code"
              >
                <Form.Control type="text" placeholder="6HY97GGO" />
              </FloatingLabel>
            )}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="tv-px-20">
        {isProfilePopup ? (  
          <PrimaryButton
            type="button"
            size="btn-lg"
            text="download"
            rounded={false}
            outlined={false}
            btnBG="tv-btn-gradient m-0"
            spacingClasses="0"
            additionalClass="btn-block"
            hasIcon={true}
            reverse={true}
            togalModal={downloadImage}
            icon={<Download color="white" />}            
          />
        ) : (
          <PrimaryButton
            type="button"
            size="btn-lg"
            text={buttonText}
            togalModal={onClick}
            rounded={false}
            outlined={false}
            btnBG="tv-btn-gradient m-0"
            spacingClasses="0"
            additionalClass="btn-block"
            hasIcon={false}
            reverse={false}
            icon=""
          />
          
        )}
      </Modal.Footer>
    
    
    </Modal>
  );
};

export default TVGeneralPopup;
