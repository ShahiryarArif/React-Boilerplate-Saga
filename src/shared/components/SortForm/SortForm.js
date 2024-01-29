import React from "react";
import "./sortform.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const styleCond = isSelected ? getComputedStyle(document.body).getPropertyValue("--color-neon-green")
: ""

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    backgroundColor: getComputedStyle(document.body).getPropertyValue(
      "--color-dark-green"
    ),
    color: "white",
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,

    "&:hover": {
      backgroundColor: getComputedStyle(document.body).getPropertyValue(
        "--color-neon-green"
      ),
    },
    backgroundColor: isFocused
      ? getComputedStyle(document.body).getPropertyValue("--color-neon-green")
      : styleCond
  }),

  menu: (provided, state) => ({
    ...provided,
    "&:hover": {
      borderColor: "pink",
    },
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    backgroundColor: getComputedStyle(document.body).getPropertyValue(
      "--color-dark-green"
    ),
    outline: "none",
    padding: "6px",
    border: "none",
    borderRadius: "8px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: getComputedStyle(document.body).getPropertyValue("--color-gray-nav"),
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: getComputedStyle(document.body).getPropertyValue("--color-gray-nav"),
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};

const SortForm = ({ content, isBlock }) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      className={`sortform ${classNameCond}`}
      placeholder={content ? content : ''}
    />
  );
};

const classNameCond = !isBlock && `sortform-block`

export default SortForm;
