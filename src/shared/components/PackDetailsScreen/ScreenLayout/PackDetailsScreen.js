import Layout from "shared/components/Layout/Layout";
import ProductImage from "shared/components/ProductImage/ProductImage";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import TvBreadcrumbs from "../../Breadcrumbs/TvBreadcrumbs";
import PackDetail from "../PackDetail/PackDetail";
import PackListingDetail from "../PackListingDetail/PackListingDetail";
import FullLoader from "shared/FullLoader/FullLoader";
import SuccessMessage from "shared/components/SuccessMessage/SuccessMessage";
import { GreenTick, SuccessIcon } from "assets/SVGs/SVGs";
import { pushNotification } from "utils/notifications";
import GeneralModal from "shared/components/Modals/GeneralModal/GeneralModal";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import { validateJwtTokenCall } from "shared/services/auth/authService";
import MakeAnOfferVariation from "modules/MarketPlace/components/ItemScenarios/ItemScenariosVariations/MakeAnOfferVariation/MakeAnOfferVariation";

const BreadCrumbItems = [
  {
    title: "Packs",
    active: false,
  },
  {
    title: "Summer Rare Pack",
    active: true,
  },
];
const BreadCrumbItemsModal = [
  {
    title: "Back to Listing",
    active: true,
  },
];

let purchaseModelState = false;

const PackDetailsScreen = (props) => {
  const detail = props?.packs?.packsDetail;
  const [packSkusDetail, setPacksSkuDetail] = useState(props?.packs?.packSkusDetail);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const idle = props?.packs?.idle;
  const [reserveModal, setShowReserveModal] = useState(false);
  const [offer, setOffer] = useState("");
  const loadMore = props?.packs?.skuLoadMore;
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("Item hase been added in the cart successfully");
  const params = {
    slug: props.match.params.slug,
    type: props.match.params.type,
    packDetail: undefined,
    packSkusDetail: undefined,
  };
  const showSuccessMessage = async () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setInfo("Item hase been added in the cart successfully");
    }, 2000);
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
        }
        return false;
      }
    }
  }
  const handleItemPurchaseModel = async (e) => {
    purchaseModelState = e;
  };
  const reserveButtonHandler = () => {
    const launchDate = new Date(props?.packs?.packsDetail?.launch_date).getTime();
    const currentDate = new Date().getTime();
    let difference = launchDate - currentDate;
    if (difference > 0) {
      return true;
    }
    return false;
  };
  const placeOffer = (body) => {
    props?.offerIsPlacing();
    props?.placeOffer(body);
  };
  const handleOfferValue = (val) => {
    setOffer(val);
  };
  /*Offer Modal Close Handle */
  const closeOfferModalSuccessHandler = () => {
    setShowOfferModal(false);
  };
  /*Offers Status Code */
  useEffect(() => {
    if (props.offer.statusCode === 200) {
      purchaseModelState = false;
      setShowOfferModal(true);
      props.resetOfferState();
    } else if (props.offer.statusCode === 8010) {
      pushNotification(`Offer Already Placed.`, "error", "TOP_CENTER");
      purchaseModelState = false;
      props.resetOfferState();
    } else if (props.offer.statusCode === 1027) {
      pushNotification(`Cannot place offer on your own item.`, "error", "TOP_CENTER");
      purchaseModelState = false;
      props.resetOfferState();
    } else if (props?.offer?.statusCode !== "") {
      pushNotification("Something Went Worng", "error", "TOP_CENTER");
      props.resetOfferState();
    }
  }, [props.offer.statusCode]);
  useEffect(() => {
    props?.resetState();
    props.fetchPackDetail(params);
  }, []);
  useEffect(() => {
    if (props?.packs?.statusCode !== 200 && props?.packs?.statusCode !== "") {
      history.push("/not-found");
    }
  }, [props?.packs?.statusCode]);
  /*Reserve packs Status */
  useEffect(() => {
    if (props?.packs?.reserveStatus === 200) {
      setShowReserveModal(true);
      props?.resetReserveState();
    } else if (props.packs?.reserveStatus !== "") {
      pushNotification("Something went wrong", "error", "TOP_CENTER");
      props?.resetReserveState();
    }
  }, [props?.packs?.reserveStatus]);
  const ReservePack = async () => {
    if (await verifySession()) {
      props?.reservePack({ packID: props?.packs?.packsDetail?.packID });
    } else {
      document.location = "/login";
    }
  };
  useEffect(() => {
    setPacksSkuDetail(props?.packs?.packSkusDetail);
  }, [props?.packs?.packSkusDetail]);
  return (
    <>
      {detail !== undefined && (
        <Layout>
          <SuccessMessage show={show} setShow={setShow} title='Congratulations' info={info} icon={<GreenTick />} />
          <TvBreadcrumbs items={BreadCrumbItems} />
          <div className='tv-container overflow-hidden'>
            <div className='row row-grid tv-pb-60'>
              <div className='col-xxl-7 '>
                <ProductImage
                  forPack
                  totalSKUCount={detail?.totalSKUCount}
                  image={detail?.thumbnail_url}
                  brandImage={detail?.brand?.logo}
                  // blockChainImage={detail?.blockchain?.logo}
                  rarity={detail?.rarity}
                />
              </div>
              <div className='col-xxl-5 '>
                {props?.packs?.packsDetail?.packSkus[0]?.itemState?.toLowerCase() === "onsale" && (
                  <PackListingDetail
                    priceSubText={true}
                    listingForGlobalPack={true}
                    detail={detail}
                    itemSkusDetail={packSkusDetail}
                    addToCart={props.addToCartAction}
                    cart={props.cart}
                    showSuccessMessage={showSuccessMessage}
                    loadMore={loadMore}
                    loading={props?.packs?.loading}
                    fetchPacksSkus={props.fetchPackSku}
                    changeItemSku={props.changePackSkuAction}
                    resetStateAction={props.resetState}
                    idle={idle}
                    packSkusDetail={packSkusDetail}
                    handleItemPurchaseModel={handleItemPurchaseModel}
                    resetStates={props.resetStates}
                    reserveButton={reserveButtonHandler()}
                    handleOfferValue={handleOfferValue}
                    placeOffer={placeOffer}
                    statusCode={props?.packs?.statusCode}
                    ReservePack={ReservePack}
                    launchDate={props?.packs?.packsDetail?.launch_date}
                  />
                )}
                {props?.packs?.packsDetail?.packSkus[0]?.itemState?.toLowerCase() === "purchased" && (
                  <MakeAnOfferVariation
                    detail={detail}
                    fetchItemsSkus={props.fetchPackSku}
                    itemSkusDetail={packSkusDetail}
                    changeItemSku={props.changePackSkuAction}
                    showSuccessMessage={showSuccessMessage}
                    item_ID={detail?.packID}
                    skus={props?.packs?.packsDetail?.packSkus}
                    idle={idle}
                    loadMore={loadMore}
                    loading={props?.packs?.loading}
                    closeOfferModal={closeOfferModalSuccessHandler}
                    resetStateAction={props.resetState}
                    placeOffer={placeOffer}
                    handleOfferValue={handleOfferValue}
                    statusCode={props?.packs?.statusCode}
                    type='packs'
                  />
                )}
              </div>
              <div className='col-xxl-7   mb-sm-0'>
                <PackDetail description={detail?.description} />
              </div>
            </div>
          </div>
          {showOfferModal && (
            <GeneralModal
              icon={<SuccessIcon />}
              show={showOfferModal}
              onHide={() => {
                closeOfferModalSuccessHandler();
                setShowOfferModal(false);
              }}
              title={"Offer Sent Succesfully"}
              content={
                //"You have placed bid for "+detail?.name+ ". Your offer is sent to 20 collectors. You will be notified once your offer will be accepted or a counter offer will be made by any of the owners. Please note the offer will be withdrawen after 24 hours."
                "You 122 have placed bid worth USD $" +
                offer +
                " for " +
                detail?.name +
                ". Your offer is sent to collectors. You will be notified once your offer will be accepted or a counter offer will be made by any of the owners. Please note the offer will be withdrawn after 24 hours."
              }
              buttons={
                <>
                  <PrimaryButton
                    type='button'
                    size='btn-xl'
                    text='Close'
                    rounded={false}
                    outlined={false}
                    btnBG='tv-btn-gradient'
                    spacingClasses='tv-mr-16'
                    additionalClass='w-50'
                    hasIcon={false}
                    reverse={false}
                    togalModal={() => setShowOfferModal(false)}
                  />
                </>
              }
            />
          )}
          <GeneralModal
            icon={<SuccessIcon />}
            show={reserveModal}
            onHide={() => {
              setShowReserveModal(false);
            }}
            title={"Pack Reserved Successfully!!"}
            content={`You have reserved ${detail.name}. You can preview it from your packs or add them in showcase.`}
          />
        </Layout>
      )}
      {props?.packs?.loading === true && props?.packs?.packsDetail === undefined && <FullLoader />}
      {props?.packs?.loading === true && <FullLoader />}
      {props?.offer?.loading && <FullLoader />}
    </>
  );
};

export default PackDetailsScreen;
