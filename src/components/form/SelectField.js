import React from "react";

const SelectField = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
      <select
        defaultValue="default"
        onChange={(e) => props.setSelect(e.target.value)}
        name={props.name.toLowerCase()}
        id={props.name.toLowerCase()}
        required={props.required}
      >
        <option value="default" disabled={true}>
          Select a(n) {props.name}
        </option>
        {props.options.map((item, index) => (
            <option key={index} value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
