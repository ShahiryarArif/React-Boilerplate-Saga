import React from "react";
import "./rarityDropdown.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { ArrowDown } from "../../../assets/SVGs/SVGs";

const RarityDropdown = ({
  title,
  color,
  spacings,
  extraClasses,
  customMenu,
  rarityDropdownFilter,
  customMenuClasses,
}) => {
  return (
    <div id="rarityDropDown" className="h-100 ">
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          className={`${color} d-flex justify-content-between align-items-center ${extraClasses} ${spacings} `}
          id="dropdown-basic"
        >
          {title ? (
            <div className="rarityDropDown-title">
              <b className="text-black  tv-mr-4">IP:</b>
              <span>{title}</span>
            </div>
          ) : (
            ""
          )}
          <ArrowDown />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Common"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Common
            </label>
            <span className="rarity common"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Uncommon"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Uncommon
            </label>
            <span className="rarity uncommon"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Rare"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Rare
            </label>
            <span className="rarity rare"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Special"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Special
            </label>
            <span className="rarity special"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Legendary"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Legendary
            </label>
            <span className="rarity legendary"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Mythical"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Mythical
            </label>
            <span className="rarity mythical"></span>
          </div>

          <div className="d-flex justify-content-between align-items-center tv-mb-4 me-0">
            <label className="form-checkbox d-flex align-items-center">
              <input
                value="Golden"
                type="checkbox"
                onChange={(e) => {
                  rarityDropdownFilter(e);
                }}
              />
              Golden
            </label>
            <span className="rarity golden"></span>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default RarityDropdown;
