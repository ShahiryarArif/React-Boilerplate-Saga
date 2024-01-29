import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "../ItemSendOfferModal/itemSendOfferModal.scss";
import TvBreadcrumbs from "../../Breadcrumbs/TvBreadcrumbs";
import TvNumberInput from "shared/components/TvNumberInput/TvNumberInput";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import { pushNotification } from "utils/notifications";

const BidSendModal = ({
  show,
  BreadCrumbItemsModal,
  itemSendOfferModalClose,
  offerItemSku,
  itemImage,
  rarity,
  name,
  status,
  placeBid,
  bidState,
}) => {
  const [showOffer, setShowOffer] = useState(show);
  const [value, setValue] = useState(0);
  const closeItemOfferModal = () => {
    setShowOffer(false);
    itemSendOfferModalClose();
  };
  const handleInputChange = (input) => {
    setValue(input);
  };
  const submit = () => {
    if (parseFloat(value) > parseFloat(bidState?.currentBid)) {
      const params = { auctionid: (bidState?.auctionID).toString(), price: value.toString() };
      placeBid(params);
    } else {
      pushNotification("Value Should be Greater Than Current Bid", "error", "TOP_CENTER");
    }
  };
  return (
    <Modal
      size='lg'
      show={showOffer}
      onHide={closeItemOfferModal}
      aria-labelledby='example-modal-sizes-title-lg'
      className='item-send-offer-modal '
      centered
    >
      <Modal.Header closeButton>
        <TvBreadcrumbs className='tv-breadcrumb-small' items={BreadCrumbItemsModal} leftArrow />
      </Modal.Header>
      <Modal.Body>
        <img className='image' src={itemImage} alt='' />
        <h1 className='title tv-mt-20'>{name}</h1>
        <ul className='item-detail tv-mb-48'>
          <li>{status}</li>
          <li>Rarity:{rarity}</li>
          <li>Owner: {offerItemSku?.ownedBy?.displayName}</li>
        </ul>
        <h2 className='price tv-mb-30'>Current Bid: USD ${bidState.currentBid}</h2>
        <TvNumberInput handleInputChange={handleInputChange} />
        <PrimaryButton
          type='button'
          size='btn-xl'
          text='Place Bid'
          rounded={false}
          outlined={false}
          btnBG='tv-btn-gradient'
          spacingClasses='tv-pt-18 tv-pb-18'
          additionalClass='w-100'
          hasIcon={false}
          reverse={false}
          togalModal={() => submit()}
        />
      </Modal.Body>
    </Modal>
  );
};

export default BidSendModal;
