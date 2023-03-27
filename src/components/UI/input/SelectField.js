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
        defaultValue=""
      >
        <option hidden={true} disabled={true} value="">
              Select a type
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
