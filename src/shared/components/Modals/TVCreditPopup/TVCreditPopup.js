import React, { useState } from "react";
import { Modal, Button, FloatingLabel } from "react-bootstrap";
import { Close } from "../../../../assets/SVGs/SVGs";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import FormikFloatingInput from "shared/components/FormikElements/FormikFloatingInput/FormikFloatingInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../modals.scss";

const TVCreditPopup = (props,{ isCreditInitiallyOpend, CloseForm ,closeWalletForm}) => {
    const addNewCreditCard =props.addNewCreditCard
    isCreditInitiallyOpend=props.isCreditInitiallyOpend
     CloseForm=props.CloseForm 
     closeWalletForm=props.closeWalletForm
  const [modalToggle, setModalToggle] = useState(isCreditInitiallyOpend);

  return (
    <Modal
      className="tv-alert-modal-wrapper"
      show={modalToggle}
      onHide={() => {setModalToggle(false)
        closeWalletForm()}}
      centered
    >
      <Modal.Header className="justify-content-end pb-0">
        <Button
          variant="default"
          className="p-0"
          onClick={() => {
            setModalToggle(false);
            CloseForm();
            closeWalletForm();
          }}
        >
          <Close />
        </Button>
      </Modal.Header>
      <Formik
        initialValues={{
          cardHolderName: "",
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        }}
        validationSchema={Yup.object({
            cardHolderName: Yup.string().required("*required"),
          cardNumber: Yup.string().required("*required")
         .matches(/^\d+$/, 'The field should have digits only')        
          .max(16),
          expiryDate: Yup.date().required("*required"),
          cvv:Yup.string().required("*required")
          .matches(/^\d+$/, 'The field should have digits only')        
          .min(3,'Must be 3 or 4 characters')
          .max(4,'Must be 3 or 4 characters')
         
        })}
        onSubmit={async (values, { setSubmitting }) => {
          addNewCreditCard(values)
          alert(JSON.stringify(values)); 
          CloseForm();
          closeWalletForm();

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
              <h4 className="tv-mb-30">Add another card</h4>
              <FloatingLabel
                className="tv-mt-18"
                controlId="floatingInput"
                label="Card Holder Name"
              >
                <FormikFloatingInput
                  name="cardHolderName"
                  type="text"
                  placeholder="Card Holder Name"
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
                  type="text"
                  placeholder="Card Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
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
                      type="date"
                      placeholder="Expiry Date"
                      onBlur={handleBlur}
                      onChange={handleChange}
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
                      name="cvv"
                      type="password"
                      placeholder="CVV"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="tv-px-20">
              <PrimaryButton
                type="button"
                size="btn-xl"
                text="Add Card"
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
  );
};

export default TVCreditPopup;
