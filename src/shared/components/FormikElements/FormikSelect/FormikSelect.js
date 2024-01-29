import React from "react";
import { useField } from "formik";
import { Form } from "react-bootstrap";
import "./FormikSelect.css";

function getStyles() {
  return {
    border: "1px solid red",
  };
}

const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error ? true : false;
  return (
    <div>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <Form.Select
        {...field}
        {...props}
        style={{ ...(error ? getStyles() : "") }}
      />
      {meta.touched && meta.error ? (
        <div className="select-error-style">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelect;
