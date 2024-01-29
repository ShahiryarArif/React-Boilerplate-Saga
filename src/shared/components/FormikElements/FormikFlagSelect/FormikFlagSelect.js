import React from "react";
import { useField } from "formik";
import "./FormikFlagSelect.css";
import ReactFlagsSelect from "react-flags-select";

function getStyles() {
  return {
    border: "1px solid red",
  };
}

const FormikFlagSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.value === undefined && meta.error ? true : false;
  return (
    <div className="col-md-6 tv-mb-18 ">
      <ReactFlagsSelect
        {...field}
        {...props}
        style={{ ...(error ? getStyles() : "") }}
      />
      {meta.value === undefined && meta.error ? (
        <div className="select-error-style">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikFlagSelect;
