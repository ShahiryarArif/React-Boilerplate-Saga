import React from "react";
import { useField } from "formik";
import { FloatingLabel, Form } from "react-bootstrap";
import "./FormikInput.css";

function getStyles() {
  return {
    border: "1px solid red",
  };
}

const FormikInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    const error = meta.touched && meta.error ? true : false
    return (
      <>
      <div className='col-md-6 tv-mb-32'>
      <FloatingLabel htmlFor={props.id || props.name} label={label} controlId={props.controlId} >
        <Form.Control {...props} {...field} 
        style= {{...error ? getStyles() : '' }} />
        </FloatingLabel>
        {meta.touched && meta.error ? (
          <div className="input-error-style">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default FormikInput;
