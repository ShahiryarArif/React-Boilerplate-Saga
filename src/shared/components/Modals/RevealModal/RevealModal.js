import "./revealModal.scss";
import React  from "react";
import Modal from "react-bootstrap/Modal";
import ItemCard from "../../ItemCard/ItemCard";
import Penny from "../../../../assets/images/penny.svg";
import GodzillaKong from "../../../../assets/images/godzilla-kong.svg";
import ParamountLogo from "../../../../assets/images/paramount.svg";
import Pill from "../../ItemCard/FooterComponents/RewardPill/Pill";
import Light from "../../../../assets/images/light.svg";

const RevealModal = ({ show, onHide }) => {

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="reveal_modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Body>
        <h3 className="reveal_modal-upper">Collection Completed!</h3>
        <img src={Light} alt="Light" className="reveal_modal__light" />
        <ItemCard
          isMoreOptions={true}
          haveTick
          haveGoldenBorder
          topPillContent="LEGEND"
          name="Penny Robinson"
          number="07"
          image={Penny}
          status="#05 of 50"
          collectionIcon={GodzillaKong}
          leftFooterContents={
            <>
              {" "}
              <img
                src={ParamountLogo}
                alt=""
                className="itemcard__img-paramount"
              />
              {<Pill color={"pill-yellow"}>{"2DE"}</Pill>}
            </>
          }
          rightFooterContents={
            <>
              {" "}
              <h5 className="itemcard__offer">{"USD $500"}</h5>
            </>
          }
        />
        <div className="reveal_modal-lower">
          <h3>
            You've Won a <strong> Legendary Item!</strong>
          </h3>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RevealModal;
