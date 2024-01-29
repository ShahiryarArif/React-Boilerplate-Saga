import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./searchform.scss";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "9X0X0QDPMK",
  "1d1f293e4d2e17534fae4476e5cbdfba"
);

const TvSearchForm = ({
  icon,
  placeholder,
  clearSearch,
  search,
  bgClass,
  extraClass,
  isTradingAssetSearch,
  searchQuery,
  setSearchQuery,
}) => {
  const changeHandler = (e, handleChange) => {
    //clearSearch
    if (e.target.value === "") {
      clearSearch();
    }
    if (isTradingAssetSearch) setSearchQuery(e.target.value);
    handleChange(e);
  };

  return (
    <>
      <Formik
        initialValues={{
          searchQuery: "",
        }}
        validationSchema={Yup.object({
          searchQuery: Yup.string().required("*required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          //searching Action
          search(values.searchQuery);
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
          <Form
            onSubmit={handleSubmit}
            className={`search-form  ${bgClass ? bgClass : ""} ${
              extraClass ? extraClass : ""
            }`}
          >
            <div className="search-form-content h-100 d-flex w-100 align-items-center">
              <div className="search-form-bar-icon"> {icon ? icon : ""}</div>
              <Field
                type="search"
                name="searchQuery"
                className="search-form-bar"
                value={values.searchQuery}
                placeholder={placeholder ? placeholder : "placeholder"}
                onChange={(e) => changeHandler(e, handleChange)}
                // value={searchQuery}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TvSearchForm;
