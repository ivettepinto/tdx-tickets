import React from "react";

const TextField = (props) => {
  return (
    <>
      <label htmlFor="text">Text</label>
      <input
        onChange={(event) => props.handleOnChange(props.index, event)}
        id="text"
        name="text"
        type="text"
        required={true}
        value={props.text}
      />
      <br />
      <label htmlFor="alignment">Alignment</label>
      <select name="align-items" id="align-items" required={true}>
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option value="center">Center</option>
        <option value="justify">Justify</option>
      </select>
      <br />

      <label htmlFor="urllink">Url link</label>
      <input
        onChange={(event) => props.handleOnChange(props.index, event)}
        id="urllink"
        name="urllink"
        type="text"
        required={true}
        value={props.urllink}
      />
      <br />

      <label htmlFor="typeText">type Text</label>
      <select
        onChange={(event) => props.handleOnChange(props.index, event)}
        name="typeText"
        id="typeText"
        required={true}
        value={props.type}
      >
        <option value="h1">Tittle 1</option>
        <option value="h2">Tittle 2</option>
        <option value="p">Simple</option>
      </select>
      <br />
    </>
  );
};

export default TextField;
