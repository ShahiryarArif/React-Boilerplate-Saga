import React, { useState } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import { Close, CloseEye, Eye } from "../../../../assets/SVGs/SVGs";
import "./authenticationModal.scss";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import TVLogo from "../../../../assets/images/logo.svg";
import FormikFloatingInput from "shared/components/FormikElements/FormikFloatingInput/FormikFloatingInput";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginModal = () => {
  const [modalToggle, setModalToggle] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  return (
    <Modal
    show={modalToggle}
    onHide={() => setModalToggle(false)}
    centered
    className="tv-auth-modal-wrapper"
  >
    <Modal.Header className="justify-content-end pb-0">
      <Button
        variant="default"
        className="p-0"
        onClick={() => setModalToggle(false)}
      >
        <Close />
      </Button>
    </Modal.Header>
    <Modal.Body>
      <Formik
        initialValues={{}}
        validationSchema={Yup.object({
          password: Yup.string().required("*required"),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Confirm password should be equal to password"
            )
            .required("*required"),
        })}
      >
        {() => (
          <Form onSubmit={handleSubmit} className="tv-mb-40">
            <h3 className="tv-mb-24">Create Password</h3>
            <div className="tv-password-input-wrapper">
              <FloatingLabel
                className="tv-mb-24"
                controlId="floatingInput"
                label="New Password"
              >
                <FormikFloatingInput
                  name="password"
                  type={isPassword ? "text" : "password"}
                  placeholder="New Password"
                />
              </FloatingLabel>
              <span
                className="tv-password-toggle"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? <Eye /> : <CloseEye />}
              </span>
            </div>
            <div className="tv-password-input-wrapper">
              <FloatingLabel
                className="tv-mb-8"
                controlId="floatingInput"
                label="Confirm Password"
              >
                <FormikFloatingInput
                  name="confirmPassword"
                  type={isPassword ? "text" : "password"} // It is for the eye button
                  placeholder="Confirm Password"
                />
              </FloatingLabel>
              <span
                className="tv-password-toggle"
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? <Eye /> : <CloseEye />}
              </span>
            </div>
            <PrimaryButton
              type="submit"
              size="btn-xl"
              text="Create Password"
              rounded={false}
              outlined={false}
              btnBG="tv-btn-gradient m-0"
              spacingClasses="0"
              additionalClass="btn-block justify-content-between"
              hasIcon={true}
              reverse={true}
              icon={<img src={TVLogo} alt="TV logo" />}
            />
          </Form>
        )}
      </Formik>
    </Modal.Body>
  </Modal>
  );
};

export default LoginModal;
