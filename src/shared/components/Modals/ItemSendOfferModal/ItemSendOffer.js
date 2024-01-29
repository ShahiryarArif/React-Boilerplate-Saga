import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./itemSendOfferModal.scss";
import TvBreadcrumbs from "../../Breadcrumbs/TvBreadcrumbs";
import TvNumberInput from "shared/components/TvNumberInput/TvNumberInput";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import { pushNotification } from "utils/notifications";
import { validateJwtTokenCall } from "shared/services/auth/authService";

const ItemSendOffer = ({
  show,
  BreadCrumbItemsModal,
  itemSendOfferModalClose,
  offerItemSku,
  itemImage,
  rarity,
  name,
  status,
  placeOffer,
  handleOfferValue,
  type,
}) => {
  const [showOffer, setShowOffer] = useState(show);
  const [value, setValue] = useState(0);
  const item_sku_id = offerItemSku.itemSKUID.toString();

  const closeItemOfferModal = () => {
    setShowOffer(false);
    itemSendOfferModalClose();
  };
  async function verifySession() {
    let token = localStorage.getItem("jwt_token");
    if (token === null) {
      document.location = "/login";
    } else {
      let response = await validateJwtTokenCall({
        jwt_token: token?.toString(),
      });
      if (response) {
        if (response.responseCode === 200) {
          return true;
        } else {
          document.location = "/login";
        }
      }
    }
  }
  const submit = async () => {
    if (await verifySession()) {
      let offerValue = parseFloat(value);
      if (offerValue > 0) {
        const params = { item_sku_id: item_sku_id, offered_price: value, itemType: type };
        placeOffer(params);
        setShowOffer(false);
        itemSendOfferModalClose();
      } else {
        pushNotification(`Offer Price Must Be Greater Than 0`, "error", "TOP_CENTER");
      }
    }
  };

  const handleInputChange = (val) => {
    setValue(val.toString());
    handleOfferValue(val);
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
        <h2 className='price tv-mb-30'>Price: USD ${offerItemSku.salePrice}</h2>
        <TvNumberInput handleInputChange={handleInputChange} />
        <PrimaryButton
          type='button'
          size='btn-xl'
          text='Send Offer '
          rounded={false}
          outlined={false}
          btnBG='tv-btn-gradient'
          spacingClasses='tv-pt-18 tv-pb-18'
          additionalClass='w-100'
          hasIcon={false}
          reverse={false}
          togalModal={submit}
          // onClick={() => setModalShow(!modalShow)}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ItemSendOffer;
