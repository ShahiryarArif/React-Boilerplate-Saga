import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";
import "../FormikInput/FormikInput.css";

function getStyles() {
  return {
    border: "1px solid red",
  };
}

const FormikFloatingInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error ? true : false;
  return (
    <>
      <Form.Control
        {...field}
        {...props}
        style={{ ...(error ? getStyles() : "") }}
      />
      {meta.touched && meta.error ? (
        <div className="input-error-style">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormikFloatingInput;
