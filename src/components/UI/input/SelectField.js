import React from "react";

const SelectField = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
      <select
        onChange={(e) => props.setSelect(e.target.value)}
        name={props.name.toLowerCase()}
        id={props.name.toLowerCase()}
        required={props.required}
      >
        <option selected={true} hidden={true} disabled={true} value="">
          Select a(n) {props.name.toLowerCase()}
        </option>
        {props.options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
