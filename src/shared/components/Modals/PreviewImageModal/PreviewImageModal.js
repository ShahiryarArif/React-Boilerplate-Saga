import React from 'react';
import { Modal } from 'react-bootstrap';
import "./previewImageModal.scss";


const PreviewImageModal = ({togglePreview, Img}) => {
    return (
        <Modal 
        show={togglePreview} 
        onHide={togglePreview}
        className="Preview-modal-wrapper"
        fullscreen={true}
        >
            <Modal.Header closeButton className="border-0">
            </Modal.Header>

            <Modal.Body className="d-flex align-items-center justify-content-center rounded-0">
                <img src={Img} style={{ "max-width": "100%", "max-height": "100%" }} alt="Image is Not Available" />
            </Modal.Body>
        </Modal>
    )
}

export default PreviewImageModal;
