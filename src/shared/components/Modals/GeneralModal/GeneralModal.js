import "./generalModal.scss";
import React from "react";
import Modal from "react-bootstrap/Modal";

const GeneralModal = ({
  show,
  onHide,
  title,
  content,
  buttons,
  icon,
  images,
  customContent,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className={`success_modal ${images && "success_modal-extended"}`}
      aria-labelledby="example-custom-modal-styling-title"
    >
      {customContent && <Modal.Header closeButton />}
      <Modal.Body>
        {icon ? (
          <>
            <div className="success_modal-icon">{icon}</div>
          </>
        ) : (
          " "
        )}
        {title ? (
          <>
            <h3 className="success_modal-heading">{title}</h3>
          </>
        ) : (
          ""
        )}
        {content ? (
          <>
            <p className="success_modal-content"> {content}</p>
          </>
        ) : (
          ""
        )}
        <div className="success_modal-buttons d-flex justify-content-center">
          {buttons}
        </div>
        {images ? (
          <>
            <div className="success_modal-imgs w-100  d-flex justify-content-center">
              {images}
            </div>
          </>
        ) : (
          ""
        )}

        {customContent ? (
          <>
            <div className="success_modal-customContent">{customContent}</div>
          </>
        ) : (
          ""
        )}
      </Modal.Body>
    </Modal>
  );
};

export default GeneralModal;
