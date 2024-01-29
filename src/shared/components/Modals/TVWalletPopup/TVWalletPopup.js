import React, { useState } from "react";
import { Modal, Button, FloatingLabel } from "react-bootstrap";
import { Close } from "../../../../assets/SVGs/SVGs";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import FormikFloatingInput from "shared/components/FormikElements/FormikFloatingInput/FormikFloatingInput";
import TVCreditPopup from "../TVCreditPopup/TVCreditPopup";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../modals.scss";

const TVWalletPopup = (props, { isInitiallyOpend, closeForm }) => {
  isInitiallyOpend = props.isInitiallyOpend;
  closeForm = props.closeForm;
  const [modalToggle, setModalToggle] = useState(isInitiallyOpend);
  const [isCreditForm, setIsCreditForm] = useState(false);
  const addFundsToWallet = props.addFundsToWallet;
  const togalForm = () => {
    setModalToggle(false);
    setIsCreditForm(true);
  };

  const closeCreditPopup = () => {
    setIsCreditForm(false);
  };

  return (
    <>
      <Modal
        className="tv-alert-modal-wrapper"
        show={modalToggle}
        onHide={() => {
          setModalToggle(false);
          closeForm();
        }}
        centered
      >
        <Modal.Header className="justify-content-end pb-0">
          <Button
            variant="default"
            className="p-0"
            onClick={() => {
              setModalToggle(false);
              closeForm();
            }}
          >
            <Close />
          </Button>
        </Modal.Header>
        <Formik
          initialValues={{
            amount: "",
            cardNumber: props.userState.accounts.cards.CardNumber,
            expiryDate: props.userState.accounts.cards.ExpiryDate,
            ccv: props.userState.accounts.cards.CVV,
          }}
          validationSchema={Yup.object({
            amount: Yup.number().required("*required").min(1),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            addFundsToWallet(values);
            alert(JSON.stringify(values));
            closeForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body className="tv-px-20">
                <h4 className="tv-mb-30">Add funds to Terra Wallet</h4>
                <FloatingLabel
                  className="tv-mt-18"
                  controlId="floatingInput"
                  label="Amount to add"
                >
                  <FormikFloatingInput
                    name="amount"
                    type="text"
                    placeholder="Amount to add"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  className="tv-mt-18"
                  controlId="floatingInput"
                  label="Card Number"
                >
                  <FormikFloatingInput
                    name="cardNumber"
                    readOnly
                    type="text"
                    placeholder="Card Number"
                    onBlur={handleBlur}
                  />
                </FloatingLabel>
                <div className="row row-gutter-20">
                  <div className="col-md-6">
                    <FloatingLabel
                      className="tv-mt-18"
                      controlId="floatingInput"
                      label="Expiry Date"
                    >
                      <FormikFloatingInput
                        name="expiryDate"
                        type="text"
                        readOnly
                        placeholder="Expiry Date"
                        onBlur={handleBlur}
                      />
                    </FloatingLabel>
                  </div>
                  <div className="col-md-6">
                    <FloatingLabel
                      className="tv-mt-18"
                      controlId="floatingInput"
                      label="CVV"
                    >
                      <FormikFloatingInput
                        name="ccv"
                        type="text"
                        placeholder="CCV"
                        readOnly
                        onBlur={handleBlur}
                      />
                    </FloatingLabel>
                  </div>
                </div>
                <p className="tv-my-16 text-uppercase text-center">or</p>
                <PrimaryButton
                  type="submit"
                  size="btn-xl"
                  text="Add a New Credit Card"
                  togalModal={togalForm}
                  rounded={false}
                  outlined={true}
                  btnBG="tv-btn-dashed m-0"
                  spacingClasses="0"
                  additionalClass="btn-block"
                  hasIcon={false}
                  reverse={false}
                  icon=""
                />
              </Modal.Body>
              <Modal.Footer className="tv-px-20">
                <PrimaryButton
                  type="button"
                  size="btn-xl"
                  text="Add Funds"
                  rounded={false}
                  outlined={false}
                  btnBG="tv-btn-gradient m-0"
                  spacingClasses="0"
                  additionalClass="btn-block"
                  hasIcon={false}
                  reverse={false}
                  icon=""
                  togalModal={(e) => handleSubmit(e)}
                />
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
      {isCreditForm && (
        <TVCreditPopup
          isCreditInitiallyOpend={isCreditForm}
          CloseForm={closeCreditPopup}
          title="Add another card"
          addNewCreditCard={props.addNewCreditCard}
          closeWalletForm={closeForm}
        />
      )}
    </>
  );
};

export default TVWalletPopup;
