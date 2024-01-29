import { React, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./packRevealModal.scss";
import { Close } from "../../../../assets/SVGs/SVGs";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import ItemCard from "shared/components/ItemCard/ItemCard";
import FirstReveal from "../../../../assets/images/first-reveal.png";
import { pushNotification } from "utils/notifications";
import FullLoader from "shared/FullLoader/FullLoader";

let revealItemsHash = undefined;

const PackRevealModal = ({
  show,
  handleClose,
  packImage,
  packSkuId,
  revealPackAction,
  userPacks,
  revealPackByIdsAction,
  resetRevealPacksByIdsState,
  revealState,
  handlePackRevealed,
}) => {
  const [revealShow, setRevealShow] = useState(show);
  const [onPackView, setOnPackView] = useState(true);
  const [revealed, setrevealed] = useState(revealState);
  const [itemSkuId, setitemSkuId] = useState(undefined);
  const [apicallFlag, setApicallFlag] = useState(false);

  const PackViewHanle = () => {
    revealPackAction({ packSKUID: packSkuId });
  };

  const AllReveal = async () => {
    resetRevealPacksByIdsState();
    setrevealed("Revealed");
    handlePackRevealed();
    let ids = Object.keys(revealItemsHash).toString();
    setitemSkuId(ids.split(","));
    setApicallFlag(true);
    revealPackByIdsAction({ skuid: packSkuId, itemSkus: ids });
  };

  const createRevealPackHash = async (revealItems) => {
    let hash = {};
    revealItems.forEach((item) => {
      hash[item.itemSkus[0].itemSKUID] = { data: item, revealFlag: item.openStatus === "notOpened" ? false : true };
    });
    // await setrevealItemsHash(hash)
    revealItemsHash = hash;
    setOnPackView(false);
    setRevealShow(true);
  };

  useEffect(() => {
    if (userPacks.revealByIdStatus === "succeeded") {
      updateRevealedItemsHash();
    } else if (userPacks.revealByIdStatus === "failure") {
      setApicallFlag(false);
    }
    if (revealItemsHash !== undefined) {
      console.log("********* useEffect allReveaeed *********");
      console.log(revealItemsHash);
      let allRevealed = true;
      Object.keys(revealItemsHash).forEach((key) => {
        if (revealItemsHash[key]["revealFlag"] === false) {
          allRevealed = false;
        }
      });
      if (allRevealed) {
        console.log("********** allRevealed *********");
        setrevealed("Revealed");
        handlePackRevealed();
      }
    }
  }, [userPacks]);

  useEffect(() => {
    if (userPacks?.revealStatus === 200) {
      createRevealPackHash(userPacks.revealItems);
    } else if (userPacks?.revealStatus === 1029) {
      pushNotification("No item found, plz try later", "error", "TOP_CENTER");
      setRevealShow(false);
      handleClose();
    }
  }, []);

  const HandleClose = () => {
    setRevealShow(false);
    handleClose();
  };

  const updateRevealedItemsHash = async () => {
    if (itemSkuId) {
      itemSkuId.forEach((id) => {
        revealItemsHash[id]["revealFlag"] = true;
      });
      setApicallFlag(false);
    }
  };

  const handleSingleReveal = async (Itemskuid) => {
    setApicallFlag(true);
    resetRevealPacksByIdsState();
    setitemSkuId([`${Itemskuid}`]);
    revealPackByIdsAction({ skuid: packSkuId, itemSkus: `${Itemskuid}` });
  };

  return (
    <>
      {apicallFlag && <FullLoader />}
      <Modal
        size='lg'
        show={revealShow}
        // onHide={HandleClose}
        aria-labelledby='example-modal-sizes-title-lg'
        className='pack-reveal-modal-wrapper'
      >
        <Modal.Header>
          <Button variant='default' className='p-0' onClick={HandleClose}>
            <Close />
          </Button>
        </Modal.Header>
        <Modal.Body>
          {onPackView ? (
            <div className='main-pack-card'>
              <img src={packImage} alt='pack' />
              <PrimaryButton
                type='button'
                size='btn-xl'
                text='Open pack to reveal items'
                rounded={false}
                outlined={false}
                btnBG='tv-btn-gradient'
                spacingClasses=' tv-mt-60'
                additionalClass='btn-block'
                hasIcon={false}
                reverse={false}
                togalModal={PackViewHanle}
              />
            </div>
          ) : (
            <div className='tv-container'>
              <div className='cards-to-reveal-wrap'>
                <div className='row'>
                  {revealed !== "Revealed" && (
                    <div className='col-12'>
                      <h3 className='text-center text-white'>Tap to reveal</h3>
                    </div>
                  )}
                </div>
                <div className='row tv-mt-40'>
                  {Object.keys(revealItemsHash)?.map((key) => (
                    <div className='col-12 col-md-4  tv-mb-40 reveal-item-wrap'>
                      {revealItemsHash[key]["revealFlag"] === false ? (
                        <div
                          className='unrevealed one'
                          onClick={() => handleSingleReveal(revealItemsHash[key]["data"]?.itemSkus[0].itemSKUID)}
                        >
                          <img src={FirstReveal} alt='Reveal Item' />
                        </div>
                      ) : (
                        <ItemCard
                          bidPrice={`From USD $${revealItemsHash[key]["data"]?.itemSkus[0]?.price}`}
                          haveBlockChainIcon={revealItemsHash[key]["data"]?.blockchain?.logo}
                          name={revealItemsHash[key]["data"]?.name}
                          rarity={revealItemsHash[key]["data"]?.rarity?.name?.toLowerCase()}
                          route='/productdetail'
                          image={revealItemsHash[key]["data"]?.thumbnail_url}
                          //itemType="asset"
                          itemType={revealItemsHash[key]["data"].itemSkus[0].itemType}
                          serialNumber={revealItemsHash[key]["data"].itemSkus[0].serialNumber}
                          slug={revealItemsHash[key]["data"].slug}
                          type={revealItemsHash[key]["data"].itemSkus[0].item_state}
                          // status="04 Items"
                          // estValue={"10% chances of 1 legendary items"}
                          collectionIcon={revealItemsHash[key]["data"]?.brand?.logo}
                          moreOptions={["Preview", "Put on auction", "Sell Item", "Gift Item", "Blockchain View"]}
                          // footerBadgeContent={"20 LEFT  "}
                          // footerBadgeClass="badge-golden"
                        />
                      )}
                    </div>
                  ))}
                  {/** here doc 3 */}
                </div>
                {/** here doc 4 */}
                {revealed !== "Revealed" && (
                  <div className='row'>
                    <div className='col-12 d-flex justify-content-center'>
                      <>
                        <PrimaryButton
                          type='button'
                          size='btn-lg'
                          text='Reveal All'
                          rounded={false}
                          outlined={true}
                          btnBG='tv-btn-outline-white'
                          spacingClasses='tv-mr-12'
                          additionalClass='text-nowrap '
                          hasIcon={false}
                          reverse={false}
                          togalModal={AllReveal}
                        />
                        <PrimaryButton
                          type='button'
                          size='btn-lg'
                          text='Reveal Later'
                          rounded={false}
                          outlined={true}
                          btnBG='tv-btn-outline-white'
                          spacingClasses=''
                          additionalClass='text-nowrap'
                          hasIcon={false}
                          reverse={false}
                          // onClick = {() => setRevealShow(true)}
                          togalModal={HandleClose}
                        />
                      </>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PackRevealModal;
