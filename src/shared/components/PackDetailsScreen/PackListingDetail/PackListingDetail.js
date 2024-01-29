import Listings from "shared/components/Listings/Listings";
import SerialNumberModal from "modules/MarketPlace/components/Modals/SerialNumberModal/SerialNumberModal";
import React, { useState, useEffect } from "react";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import "./packListingDetail.scss";
import PackRevealModal from "shared/components/Modals/PackRevealModal/PackRevealModal";
import { validateJwtTokenCall } from "shared/services/auth/authService";
import GeneralModal from "shared/components/Modals/GeneralModal/GeneralModal";
import SelectPaymentMethod from "modules/MarketPlace/components/SelectPaymentMethod/SelectPaymentMethod";
import FullLoader from "shared/FullLoader/FullLoader";
import { useSelector } from "react-redux";
import { SuccessIcon } from "assets/SVGs/SVGs";
import { pushNotification } from "utils/notifications";
import ItemSendModal from "shared/components/Modals/ItemSendOfferModal/ItemSendOffer";

const PackListingDetail = ({
  priceSubText,
  reserveButton,
  listingForGlobalPack,
  detail,
  loading,
  loadMore,
  fetchPacksSkus,
  itemSkusDetail,
  changeItemSku,
  idle,
  resetStateAction,
  placeOffer,
  cart,
  addToCart,
  showSuccessMessage,
  handleItemPurchaseModel,
  resetStates,
  handleOfferValue,
  statusCode,
  launchDate,
  ReservePack,
}) => {
  const packsSku = detail?.packSkus[0];
  const launch_date = new Date(detail?.launch_date).toDateString();
  const [offerItemSKu, setOfferItemSku] = useState(undefined);
  const [sendOfferModal, setSendOfferModal] = useState(false);
  const [packSkuArr, setPackSkuArr] = useState(undefined);
  const [serialModalShow, setSerialModalShow] = useState(false);
  const [revealShow, setRevealShow] = useState(false);
  const [showPaymentMethodModal, setShowPaymentMethodModal] = useState(false);
  const [showItemPurchasedModal, setShowItemPurchasedModal] = useState(false);
  console.log("Item SKus Detailll", itemSkusDetail);

  const SerialModalShow = () => {
    setSerialModalShow(true);
  };

  const changeBestSkuMatchHandler = (arr) => {
    console.log("PacksSku Arr", packSkuArr);
    changeItemSku(arr);
    setSerialModalShow(false);
    setPackSkuArr(arr);
  };

  const HandeClose = () => {
    setRevealShow(false);
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
          setShowPaymentMethodModal(true);
        } else {
          document.location = "/login";
        }
      }
    }
  }
  const handleItemSendOfferModal = async (itemSKu) => {
    setSendOfferModal(true);
    setSerialModalShow(false);
    setOfferItemSku(itemSKu);
  };
  const itemSendOfferModalClose = () => {
    setSendOfferModal(false);
    setOfferItemSku(undefined);
  };
  const checkCart = (item) => {
    for (let each of cart.cartItems) {
      if (item.itemType === "asset" && each.itemType === "asset") {
        if (item.itemSkus[0].serialNumber == each.itemSkus[0].serialNumber) {
          return false;
        }
      }

      if (item.itemType.indexOf("pack") !== -1 && each.itemType.indexOf("pack") !== -1) {
        if (item.packSkus[0].serialNumber == each.packSkus[0].serialNumber) {
          return false;
        }
      }
    }
    return true;
  };

  const cartAction = async () => {
    if (checkCart(detail)) {
      //If cart doesnt contains that item already only then proceed
      const validate = detail.packID ? true : false; //This function is used to validate the item
      if (validate) {
        addToCart(detail);
        showSuccessMessage();
      } else {
        //addToCartFunction(props?.detail)
        pushNotification("Failed to added item in cart", "error", "TOP_CENTER", 2000);
      }
    } else {
      pushNotification("Item already added in cart", "error", "TOP_CENTER", 2000);
    }
  };

  // Hooks
  let buyNowResponse = useSelector((state) => state.payments.terraWalletResponse.responseCode);

  let paymentLoading = useSelector((state) => state.payments.paymentLoading);
  useEffect(() => {
    if (buyNowResponse === 200) {
      setShowItemPurchasedModal(true);
      handleItemPurchaseModel(true);
      setShowPaymentMethodModal(false);
      resetStates();
    } else if (buyNowResponse === 1028) {
      handleItemPurchaseModel(false);
      setShowPaymentMethodModal(false);
      pushNotification("You've already purchased this item.", "error", "TOP_CENTER");
      resetStates(); //for state resetting
    }
  }, [buyNowResponse]);

  useEffect(() => {
    if (buyNowResponse === 200) {
      setShowItemPurchasedModal(true);
      setShowPaymentMethodModal(false);
    }
  }, [buyNowResponse]);

  return (
    <>
      <div className='pack-listing-detail-wrapper '>
        <div className='title-wrap tv-pb-36'>
          {detail?.edition?.name && (
            <div className='edition tv-px-22 tv-py-6 tv-mb-12'>
              <span>{detail?.edition?.name}</span>
            </div>
          )}{" "}
          <h1 className='title tv-mb-12'>{detail?.name}</h1>
          <p className='date-text'>
            Release Date: <span>{launch_date}</span>
          </p>
        </div>
        <div className=' pack-pricing-wrap tv-pb-44'>
          <Listings
            haveMatchBox={listingForGlobalPack}
            haveBorderBottom
            haveAuctionBox
            description={detail?.description}
            priceSubText={packsSku?.salePrice}
            skuTotalCount={detail?.totalSKUCount}
            skuCount={packsSku?.skuNumber}
            price={packsSku?.salePrice}
            btnOnClick={SerialModalShow}
          />
        </div>
        <div className='d-flex'>
          {reserveButton === true ? (
            <PrimaryButton
              type='button'
              size='btn-xl'
              text='Reserve'
              rounded={false}
              outlined={false}
              btnBG='tv-btn-gradient'
              spacingClasses='tv-pt-18 tv-pb-18 tv-ml-8'
              additionalClass='w-100'
              hasIcon={false}
              reverse={false}
              togalModal={ReservePack}
            />
          ) : (
            <>
              <PrimaryButton
                type='button'
                size='btn-xl'
                text='Add to Cart'
                rounded={false}
                outlined={true}
                btnBG='tv-btn-default'
                spacingClasses='tv-pt-18 tv-pb-18 tv-mr-8'
                additionalClass='w-100'
                hasIcon={false}
                reverse={false}
                togalModal={cartAction}
              />
              <PrimaryButton
                type='button'
                size='btn-xl'
                text='Buy Now'
                rounded={false}
                outlined={false}
                btnBG='tv-btn-gradient'
                additionalClass='w-sm-50 w-100'
                spacingClasses=''
                togalModal={() => verifySession()}
                hasIcon={false}
                reverse={false}
              />
            </>
          )}
        </div>
        {serialModalShow ? (
          <SerialNumberModal
            show={serialModalShow}
            onHide={() => setSerialModalShow(false)}
            fetchItemSkus={fetchPacksSkus}
            item_ID={detail?.packID}
            launchDate={launchDate}
            itemSkusDetail={itemSkusDetail}
            idle={idle}
            loading={loading}
            loadMore={loadMore}
            changeBestSkuMatchHandler={changeBestSkuMatchHandler}
            handleItemSendOfferModal={handleItemSendOfferModal}
            itemSendOfferModalClose={itemSendOfferModalClose}
            resetStateAction={resetStateAction}
            statusCode={statusCode}
            detail={detail}
          />
        ) : (
          ""
        )}{" "}
        {/*For Best Match Serial Number*/}
        {revealShow ? <PackRevealModal show={revealShow} handleClose={HandeClose} packImage={detail?.thumbnail_url} /> : ""}
      </div>
      <GeneralModal
        show={showPaymentMethodModal}
        onHide={() => setShowPaymentMethodModal(false)}
        title={"Select a Payment Method"}
        content={"By Connecting your wallet, you agree to our Terms of Service and our Privacy Policy."}
        customContent={
          <SelectPaymentMethod
            skuid={detail?.packSkus[0]?.packSKUID}
            serialnumber={detail?.packSkus[0]?.serialNumber}
            fromacount='terrawallet'
            transactiontype='wallet'
            transactionvalue={detail?.packSkus[0]?.salePrice}
            paymenttype='sale'
            itemtype={detail?.itemType}
            itemState='onsale'
          />
        }
      />
      <GeneralModal
        icon={<SuccessIcon />}
        show={showItemPurchasedModal}
        onHide={() => {
          setShowItemPurchasedModal(false);
        }}
        title={"Item Purchased Successfully"}
        content={`You have purchased ${detail.name}. You can preview it from your assets or add them in showcase.`}
      />

      {sendOfferModal && offerItemSKu && (
        <ItemSendModal
          show={sendOfferModal}
          itemSendOfferModalClose={itemSendOfferModalClose}
          offerItemSku={offerItemSKu}
          itemImage={detail?.thumbnail_url}
          rarity={detail?.rarity?.name}
          name={detail?.name}
          status={`#${offerItemSKu?.skuNumber} of ${detail?.totalSKUCount}`}
          leftArrow={true}
          placeOffer={placeOffer}
          handleOfferValue={handleOfferValue}
          type='packs'
        />
      )}
      {paymentLoading && <FullLoader />}
    </>
  );
};

export default PackListingDetail;
