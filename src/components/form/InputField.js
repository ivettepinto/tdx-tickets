import React from "react";

const InputField = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
      <input
        onChange={(e) => props.setInput(e.target.value)}
        id={props.name.toLowerCase()}
        type={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        required={props.required}
      />
    </div>
  );
};

export default InputField;
