import React from "react";
import "./custom-checkbox.scss";

const CustomCheckbox = ({
  label,
  id,
  rarity,
  value,
  handler,
  category,
  checked,
}) => {
  return (
    <div className="form-checkbox form-checkbox-lg">
      <div className="custom-checkbox__wrapper d-flex align-items-center ">
        <input
          id={id}
          type="checkbox"
          value={value}
          onChange={(e) => handler(e, category)}
          checked={checked}
        />
        {rarity && (
          <>
            <span className={rarity}></span>
          </>
        )}

        <label className="custom-checkbox__label tv-ml-10" for={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default CustomCheckbox;
