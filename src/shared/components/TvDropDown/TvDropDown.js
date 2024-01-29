import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./tvDropDown.scss";
import { ArrowDown } from "../../../assets/SVGs/SVGs";

const TvDropDown = ({
  title,
  customTitleClasses,
  dropdownItems,
  color,
  spacings,
  extraClasses,
  customMenu,
  customMenuClasses,
  alignment,
  filterHandler,
  styles,
  onChange,
}) => {
  const [DropDownTitle, setDropDownTitle] = useState(title);
  /* DropDown Handler */
  const handleClick = (e) => {
    setDropDownTitle(e.target.text);
    filterHandler(e.target.text);
    onChange && onChange();
  };
  return (
    <div id="tvDropDown">
      <Dropdown align={alignment}>
        <Dropdown.Toggle
          //variant="success"
          variant="secondary btn-sm"
          className={`${color} d-flex  align-items-center ${extraClasses} ${spacings} `}
          id="dropdown-basic"
        >
          <span className={customTitleClasses}> {title && DropDownTitle}</span>
          <ArrowDown />
        </Dropdown.Toggle>
        {customMenu ? (
          <Dropdown.Menu id="custom-dropdown" className={customMenuClasses}>
            {customMenu}
          </Dropdown.Menu>
        ) : (
          <Dropdown.Menu className={customMenuClasses}>
            {dropdownItems &&
              dropdownItems.map((item, index) => {
                return (
                  <Dropdown.Item
                    href=""
                    id={index}
                    key={index}
                    text={item}
                    onClick={(e) => handleClick(e)}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default TvDropDown;
