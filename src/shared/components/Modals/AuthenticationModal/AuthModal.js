import FormikFlagSelect from "../../FormikElements/FormikFlagSelect/FormikFlagSelect";
import React, { useState, useEffect } from "react";
import { Modal, FloatingLabel, Form } from "react-bootstrap";
import { CloseEye, Eye, BackArrow } from "../../../../assets/SVGs/SVGs";
import "./authenticationModal.scss";
import PrimaryButton from "shared/components/Buttons/PrimaryButton/PrimaryButton";
import TVLogo from "../../../../assets/images/logo.svg";
import Metamask from "../../../../assets/images/metamask.svg";
import FormikFloatingInput from "shared/components/FormikElements/FormikFloatingInput/FormikFloatingInput";
import { Formik } from "formik";
import * as Yup from "yup";
import OpenMailbox from "../../../../assets/images/open-mailbox.svg";
import FormikSelect from "shared/components/FormikElements/FormikSelect/FormikSelect";
import { checkUserName, checkEmail } from "../../../services/auth/authService";
import { pushNotification } from "../../../../utils/notifications";
import { responseCodes } from "../../../../shared/constants/error-message";
import FullLoader from "shared/components/FullLoader/FullLoader";

let urlState = "";
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,30}$/;

const checkEmailExist = async (user_email, setRegisterResponseLoading) => {
  let response = await checkEmail({ user_email });

  if (response?.responseCode === 200) {
    pushNotification("Email already exist", "error", "TOP_CENTER", 2000);
    setRegisterResponseLoading(false);
    return true;
  }
  return false;
};

const checkUserNameExist = async (userName, setRegisterResponseLoading) => {
  let response = await checkUserName({ userName });

  if (response?.responseCode === 200) {
    pushNotification("Username already exist", "error", "TOP_CENTER", 2000);
    setRegisterResponseLoading(false);
    return true;
  }
  return false;
};

const createPasswordModal = (props, modalToggle, closeModalHandler, setIsPassword, isPassword) => (
  <>
    {props.createPasswordResponseLoading && <FullLoader />}
    <Modal
      show={modalToggle}
      centered
      onHide={async () => {
        closeModalHandler();
      }}
      className='tv-auth-modal-wrapper'
    >
      {/*   <Modal.Header className="justify-content-end pb-0"></Modal.Header> */}
      <Modal.Body>
        {/* <h3 className="tv-mb-20">Create Password</h3> */}

        <Formik
          key={"createPass"}
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={Yup.object({
            password: Yup.string()
              .required("*required")
              .matches(
                passwordRegExp,
                "Please include one uppercase, one lower case, one number and one special character, minimum length should be 8"
              ),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Confirm password should be equal to password")
              .required("*required"),
          })}
          onSubmit={async (values) => {
            urlState = "createPass";
            await props.createPassword({
              password: values.password,
              confirm_password: values.confirmPassword,
              jwt_token: props.match.params.token,
            });
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className='tv-mb-40'>
              <h3 className='tv-mb-24'>Create Password</h3>
              <div className='tv-password-input-wrapper'>
                <FloatingLabel className='tv-mb-24' controlId='floatingInput' label='New Password'>
                  <FormikFloatingInput name='password' type={isPassword ? "text" : "password"} placeholder='New Password' />
                </FloatingLabel>
                <span className='tv-password-toggle' onClick={() => setIsPassword(!isPassword)}>
                  {isPassword ? <Eye /> : <CloseEye />}
                </span>
              </div>
              <div className='tv-password-input-wrapper'>
                <FloatingLabel className='tv-mb-8' controlId='floatingInput' label='Confirm Password'>
                  <FormikFloatingInput
                    name='confirmPassword'
                    type={isPassword ? "text" : "password"} // It is for the eye button
                    placeholder='Confirm Password'
                  />
                </FloatingLabel>
                <span className='tv-password-toggle' onClick={() => setIsPassword(!isPassword)}>
                  {isPassword ? <Eye /> : <CloseEye />}
                </span>
              </div>
              <PrimaryButton
                type='submit'
                size='btn-xl'
                text='Create Password'
                rounded={false}
                outlined={false}
                btnBG='tv-btn-gradient m-0'
                spacingClasses='0'
                additionalClass='btn-block justify-content-between'
                hasIcon={true}
                reverse={true}
                icon={<img src={TVLogo} alt='TV logo' />}
              />
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  </>
);

const handleUseEffect = async (props, setRegisterResponseLoading, setState, setLoginResponseLoading) => {
  if (props.registerResponse.responseCode === 200) {
    setRegisterResponseLoading(false);
    setState("registerSuccess");
  } else if (
    props.registerResponse.responseCode !== 200 &&
    props.registerResponse.responseCode !== 5010 &&
    props.registerResponse.responseCode !== 5007
  ) {
    setRegisterResponseLoading(false);
    pushNotification(responseCodes[props.registerResponse.responseCode], "error", "TOP_CENTER", 2000);
  }
  if (props.forgetPasswordResponse.responseCode === 200) {
    setState("checkEmail");
  } else if (props.forgetPasswordResponse.responseCode === 5000) {
    pushNotification("Email is incorrect", "error", "TOP_CENTER", 2000);
  }
  if (props.loginResponse.responseCode > 200) {
    setLoginResponseLoading(false);
    pushNotification("Invalid Email or Password", "error", "TOP_CENTER", 2000);
  } else if (props.loginResponse.responseCode === 200) {
    props?.userInfo();
  }
  if (props.metamaskValidationResponse.responseCode === 200) {
    setLoginResponseLoading(false);
    window.history.length > 0 ? window.history.back() : window.location("/dashboard");
  } else if (props.metamaskValidationResponse.responseCode > 200) {
    setLoginResponseLoading(false);
    pushNotification("Invalid Metamask Account", "error", "TOP_CENTER", 2000);
  }
  if (props.createPasswordResponse.responseCode > 200) {
    await pushNotification(responseCodes[props.createPasswordResponse.responseCode], "error", "TOP_CENTER", 2000);
  } else if (props.createPasswordResponse.responseCode === 200) {
    window.location = "/login";
  }
  if (props.resendResponse.responseCode === 200) {
    pushNotification("Email sent!", "success", "TOP_CENTER", 2000);
  }
};

const registerModal = (registerResponseLoading, modalToggle, setRegisterResponseLoading, setEmail, stateObj, setState, props) => {
  let setSelected = stateObj.setSelected;
  let selected = stateObj.selected;
  return (
    <>
      {registerResponseLoading && <FullLoader />}
      {
        <Modal show={modalToggle} centered className='tv-auth-modal-wrapper'>
          <Modal.Body>
            <button href='#' className='tv-mb-12 auth-modal-back-btn' onClick={() => (document.location = "/")}>
              <div className='d-flex align-items-center'>
                <span className='tv-mr-8'>
                  <BackArrow />
                </span>
                <p className='auth-modal-back-btn-text '>Go To Marketplace</p>{" "}
              </div>
            </button>
            <h3 className='tv-mb-24'>Create an Account</h3>
            <Formik
              key={"register"}
              initialValues={{
                firstName: "",
                lastName: "",
                userName: "",
                gender: "Male",
                DOB: "",
                phone: "",
                country: "PK",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("*required"),
                lastName: Yup.string().required("*required"),
                userName: Yup.string().required("*required"),
                country: Yup.string().required("*required"),
                email: Yup.string().email("Please enter valid email").required("*required"),
                password: Yup.string()
                  .required("*required")
                  .matches(
                    passwordRegExp,
                    "Please include one uppercase, one lower case, one number and one special character, minimum length should be 8"
                  ),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Confirm password should be equal to password")
                  .required("*required"),
              })}
              onSubmit={async (values) => {
                console.log("********** register user values ***********");
                console.log(values);
                setRegisterResponseLoading(true);
                if (!(await checkUserNameExist(values.userName, setRegisterResponseLoading))) {
                  if (!(await checkEmailExist(values.email, setRegisterResponseLoading))) {
                    setEmail(values.email); //This is so that we can access the email for resend button
                    await props.registerUser({
                      firstName: values.firstName,
                      lastName: values.lastName,
                      userName: values.userName,
                      gender: values.gender,
                      dateOfBirth: values.DOB,
                      phoneNumber: values.phone,
                      country: values.country,
                      email: values.email,
                      password: values.password,
                      confirmPassword: values.confirmPassword,
                    });
                  }
                }
              }}
            >
              {({ handleSubmit, values }) => (
                <Form onSubmit={handleSubmit}>
                  <div className='row row-gutter-20'>
                    <div className='col-md-6'>
                      <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='First Name'>
                        <FormikFloatingInput name='firstName' type='text' placeholder='First Name' />
                      </FloatingLabel>
                    </div>
                    <div className='col-md-6'>
                      <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Last Name'>
                        <FormikFloatingInput name='lastName' type='text' placeholder='Last Name' />
                      </FloatingLabel>
                    </div>
                    <div className='col-md-6'>
                      <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Username'>
                        <FormikFloatingInput name='userName' type='text' placeholder='Username' />
                      </FloatingLabel>
                    </div>
                    <div className='col-md-6'>
                      <FormikSelect name='gender' placeholder='Gender' selected='Male' className='form-select-lg'>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                      </FormikSelect>
                    </div>
                    <div className='col-md-6'>
                      <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Date of Birth'>
                        <FormikFloatingInput name='DOB' type='date' placeholder='Date of Birth' />
                      </FloatingLabel>
                    </div>
                    <div className='col-md-6'>
                      <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Phone Number'>
                        <FormikFloatingInput name='phone' type='text' placeholder='Phone Number' />
                      </FloatingLabel>
                    </div>
                  </div>
                  <div className='row row-gutter-20'>
                    <FormikFlagSelect
                      selected={selected}
                      onSelect={(code) => {
                        values.country = code;
                        return setSelected(code);
                      }}
                      placeholder='Country'
                      searchable
                      name='country'
                      label='country'
                    />
                  </div>
                  <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Email'>
                    <FormikFloatingInput name='email' type='text' placeholder='Email' />
                  </FloatingLabel>
                  <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Password'>
                    <FormikFloatingInput name='password' type='password' placeholder='Password' />
                  </FloatingLabel>
                  <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Confirm Password'>
                    <FormikFloatingInput name='confirmPassword' type='password' placeholder='Confirm Password' />
                  </FloatingLabel>
                  <PrimaryButton
                    type='submit'
                    size='btn-xl'
                    text='Create an Account'
                    rounded={false}
                    outlined={false}
                    btnBG='tv-btn-gradient m-0'
                    spacingClasses='0'
                    additionalClass='btn-block justify-content-between'
                    hasIcon={true}
                    reverse={true}
                    icon={<img src={TVLogo} alt='TV logo' />}
                  />
                </Form>
              )}
            </Formik>
          </Modal.Body>
          <Modal.Footer className='justify-content-center tv-py-24'>
            <p className='m-0'>
              Already got an account?{" "}
              <span className='dummy-link-underline-text' onClick={() => setState("signin")}>
                Sign In
              </span>
            </p>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};
const signinModal = (
  closeModalHandler,
  loginResponseLoading,
  setLoginResponseLoading,
  props,
  setIsPassword,
  isPassword,
  setState
) => {
  return (
    <>
      {loginResponseLoading && <FullLoader />}
      {
        <Modal
          show={true}
          centered
          onHide={() => {
            closeModalHandler();
          }}
          className='tv-auth-modal-wrapper'
        >
          <Modal.Body>
            <button href='#' className='tv-mb-12 auth-modal-back-btn' onClick={() => (document.location = "/")}>
              <div className='d-flex align-items-center'>
                <span className='tv-mr-8'>
                  <BackArrow />
                </span>
                <p className='auth-modal-back-btn-text '>Go To Marketplace</p>{" "}
              </div>
            </button>
            <h3 className='tv-mb-24'>Sign in</h3>
            <Formik
              key={"signin"}
              initialValues={{ userName: "", password: "" }}
              onSubmit={async (values) => {
                setLoginResponseLoading(true);
                await props.loginUser({
                  userName: values.userName,
                  password: values.password,
                });
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className=''>
                  <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Username'>
                    <FormikFloatingInput name='userName' type='text' placeholder='Username' />
                  </FloatingLabel>
                  <div className='tv-password-input-wrapper'>
                    <FloatingLabel className='tv-mb-8' controlId='floatingInput' label='Password'>
                      <FormikFloatingInput name='password' type={isPassword ? "text" : "password"} placeholder='Password' />
                    </FloatingLabel>
                    <span className='tv-password-toggle' onClick={() => setIsPassword(!isPassword)}>
                      {isPassword ? <Eye /> : <CloseEye />}
                    </span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tv-my-16'>
                    <div>
                      <label className='form-checkbox d-flex align-items-center'>
                        <input type='checkbox' name='rememberMe' />
                        Remember Me
                      </label>
                    </div>
                    <span onClick={() => setState("forgotPassword")} className='dummy-link-text'>
                      Forgot Password?
                    </span>
                  </div>
                  <PrimaryButton
                    type='submit'
                    size='btn-xl'
                    text='sign in'
                    rounded={false}
                    outlined={false}
                    btnBG='tv-btn-gradient m-0'
                    spacingClasses='0'
                    additionalClass='btn-block justify-content-between'
                    hasIcon={true}
                    reverse={true}
                    icon={<img src={TVLogo} alt='TV logo' />}
                  />
                  <PrimaryButton
                    type='button'
                    size='btn-xl'
                    text='Sign in with MetaMask'
                    rounded={false}
                    outlined={false}
                    btnBG='tv-btn-metamask'
                    spacingClasses='tv-mt-16'
                    additionalClass='btn-block justify-content-between'
                    hasIcon={true}
                    reverse={true}
                    togalModal={() => checkExtensionAvailabilityAndDispatch(props, setLoginResponseLoading)}
                    icon={<img src={Metamask} alt='Metamask' />}
                  />
                </Form>
              )}
            </Formik>
          </Modal.Body>
          <Modal.Footer className='justify-content-center tv-py-24'>
            <p className='m-0'>
              Don’t have an account?{" "}
              <span className='dummy-link-underline-text' onClick={() => setState("register")}>
                Create an Account
              </span>
            </p>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
};
const forgotPasswordModal = (props, modalToggle, setEmail, setState) => (
  <>
    {props.forgetPasswordResponseLoading && <FullLoader />}
    <Modal show={modalToggle} centered className='tv-auth-modal-wrapper'>
      <Modal.Body>
        <button href='#' className='tv-mb-12 auth-modal-back-btn' onClick={() => (document.location = "/login")}>
          <div className='d-flex align-items-center'>
            <span className='tv-mr-8 '>
              <BackArrow />
            </span>
            <p className='auth-modal-back-btn-text '>Back To Login</p>{" "}
          </div>
        </button>
        <h3 className='tv-mb-20'>Forgot Password </h3>
        <p className='tv-mb-30 text-style'>Please enter your valid email address to receive a code</p>
        <Formik
          key={"forgetpass"}
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email("Please enter valid email address").required("*Required"),
          })}
          onSubmit={async (values) => {
            setEmail(values.email);
            urlState = "forgetPass";
            props.setForgetPassLoadingFlag();
            props.forgetPassword({
              email: values.email,
            });
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className=''>
              <FloatingLabel className='tv-mb-20' controlId='floatingInput' label='Email Address'>
                <FormikFloatingInput name='email' type='email' placeholder='Email Address' />
              </FloatingLabel>
              <PrimaryButton
                type='submit'
                size='btn-xl'
                text='Send Verification Link'
                rounded={false}
                outlined={false}
                btnBG='tv-btn-gradient m-0'
                spacingClasses='0'
                additionalClass='btn-block'
                hasIcon={false}
                reverse={false}
                icon=''
              />
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer className='justify-content-center tv-py-24'>
        <p className='m-0'>
          Don’t have an account?{" "}
          <span className='dummy-link-underline-text' onClick={() => setState("register")}>
            Create an Account
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  </>
);
const checkMailModal = (props, modalToggle, email) => (
  <>
    {props.forgetPasswordResponseLoading ? (
      <FullLoader />
    ) : (
      <Modal show={modalToggle} centered className='tv-auth-modal-wrapper'>
        <Modal.Body>
          <div className='text-center tv-email-sent-wrapper'>
            <img src={OpenMailbox} alt='' />
            <h3>Check your mail</h3>

            <p className='tv-mb-20'>
              A password reset link has been sent to <strong>{email}</strong>. Please check mail the link will be expired after 10
              minutes.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-center tv-py-24 '>
          <p className='m-0'>
            Didn’t receive an email?{" "}
            <span
              className='dummy-link-text'
              onClick={async () => {
                await props.forgetPassword({
                  email: email,
                });
              }}
            >
              Resend
            </span>
          </p>
        </Modal.Footer>
      </Modal>
    )}
  </>
);
const registerSuccessModal = (modalToggle, closeModalHandler, setState, props, email) => (
  <>
    <Modal
      show={modalToggle}
      onHide={async () => {
        closeModalHandler();
        setState("signin");
      }}
      centered
      className='tv-auth-modal-wrapper'
    >
      <Modal.Body>
        <div className='text-center tv-email-sent-wrapper'>
          <img src={OpenMailbox} alt='' />
          <h3>Check your mail</h3>

          <p className='tv-mb-20'>You have successfully registered. Please check your email for confirmation link.</p>
        </div>
      </Modal.Body>
      <Modal.Footer className='justify-content-center tv-py-24 '>
        <p className='m-0'>
          Didn’t receive an email?{" "}
          <span
            className='dummy-link-text'
            onClick={async () => {
              await props.resendEmail(email);
            }}
          >
            Resend
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  </>
);

const checkExtensionAvailabilityAndDispatch = (props, setLoginResponseLoading) => {
  if (!window.ethereum) {
    pushNotification("MetaMask extension not detected", "error", "TOP_CENTER", 5000);
  } else {
    //Extension is available, dispatch the action to further proceed the metamask login process
    setLoginResponseLoading(true);
    props.metamaskLogin();
  }
};

const AuthModal = (props) => {
  const [modalToggle, setModalToggle] = useState(true);
  const [isPassword, setIsPassword] = useState(false);
  const [state, setState] = useState(props.defaultModal);
  const [email, setEmail] = useState(""); //email variable in state to be used between modals, like when we need to show on forgot password screen that to which email address is the forgot email sent
  const [registerResponseLoading, setRegisterResponseLoading] = useState(props.registerResponseLoading);
  const [selected, setSelected] = useState("");
  const [loginResponseLoading, setLoginResponseLoading] = useState(props.loginResponseLoading);

  const closeModalHandler = () => {
    setModalToggle(false);
  };

  useEffect(async () => {
    handleUseEffect(props, setRegisterResponseLoading, setState, setLoginResponseLoading);
  }, [props]);

  useEffect(() => {
    if (props?.infoStatus === 200) {
      setLoginResponseLoading(false);
      if (
        document.referrer.indexOf(window.location.origin) > -1 &&
        window.history.length > 0
        //Slice is used because referrer is returing '/' at the end of string which location.origin isnt, result in unmatched strings
      ) {
        if (document.referrer.includes("/user/reset/")) {
          window.location = "/dashboard";
        } else {
          window.location = document.referrer;
        }
      } else {
        window.location = "/dashboard";
      }
    } else if (props?.infoStatus > 200) {
      pushNotification("Something Went Wrong", "error", "TOP_CENTER");
    }
  }, [props?.infoStatus]);

  const invalidTokenModal = () => (
    <Modal
      show={modalToggle}
      onHide={() => {
        closeModalHandler();
      }}
      centered
      className='tv-auth-modal-wrapper'
    >
      {/*  <Modal.Header className="justify-content-end pb-0"></Modal.Header> */}
      <Modal.Body>
        <div className='text-center tv-email-sent-wrapper'>
          {/* <img src={OpenMailbox} alt="" /> */}
          <h3>Token is Invalid</h3>

          {/* <p className="tv-mb-20">
            A password reset link has been sent to <strong>{email}</strong>.
            Please check mail the link will be expired after 10 minutes.
          </p> */}
        </div>
      </Modal.Body>
    </Modal>
  );

  let stateObj = {
    setSelected,
    selected,
  };
  switch (state) {
    case "register":
      return registerModal(registerResponseLoading, modalToggle, setRegisterResponseLoading, setEmail, stateObj, setState, props);
    case "signin":
      return signinModal(
        closeModalHandler,
        loginResponseLoading,
        setLoginResponseLoading,
        props,
        setIsPassword,
        isPassword,
        setState
      );
    case "forgotPassword":
      return forgotPasswordModal(props, modalToggle, setEmail, setState);
    case "checkEmail":
      return checkMailModal(props, modalToggle, email);
    case "registerSuccess":
      return registerSuccessModal(modalToggle, closeModalHandler, setState, props, email);
    case "createPassword":
      return createPasswordModal(props, modalToggle, closeModalHandler, setIsPassword, isPassword);
    case "invalidToken":
      return invalidTokenModal();
  }
};

export default AuthModal;
