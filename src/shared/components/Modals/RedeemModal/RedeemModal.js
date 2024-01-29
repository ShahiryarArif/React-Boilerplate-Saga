import React from "react";
import Modal from "react-bootstrap/Modal";
import "./RedeemModal.scss";
import StarLight from "../../../../assets/images/star-light.png";
import ItemCard from "shared/components/ItemCard/ItemCard";
const RedeemModal = ({
  show,
  onHide,
  title,
  content,
  buttons,
  icon,
  images,
  customContent,
  reward
}) => {
  return (
    <>
       <Modal show={show} onHide={onHide} className={"redeem-modal "} centered>
       <img src={StarLight} alt="Star Light " />
       <div className="redeem-modal-card d-flex justify-content-center align-items-center flex-column">
         <h2 className="redeem-modal-title w-100 ">Collection Completed!</h2>
         <ItemCard
           isMoreOptions={false}
           // bidPrice="From USD $200"
           haveBlockChainIcon={reward?.blockchain?.logo}
           name={reward?.name}
           rarity={reward?.rarity?.name?.toLowerCase()}
           image={reward?.thumbnail_url}
           status={`#${reward?.itemSkus[0]?.skuNumber} of ${reward?.totalSKUCount}`}
           //estValue={"10% chances of 1 legendary items"}
           collectionIcon={reward?.brand?.logo}
           moreOptions={[
             "Preview",
             "Put on auction",
             "Sell Item",
             "Gift Item",
             "Blockchain View",
           ]}
           have3DALogo={reward?.itemLogoType}
           // footerBadgeContent={"20 LEFT  "}
           // footerBadgeClass="badge-golden"
           isRewardedCard
           bidPrice="Reward"
         />
         <h2 className="redeem-modal-title-golden    ">
           You’ve won a
           <br />
           <strong>{`${reward?.IP} Item!`}</strong>
         </h2>
       </div>
     </Modal>
    </>
  );
};

export default RedeemModal;
