import React from "react";

import "./Form.css";

const TextField = (props) => {
  return (
    <>
      <div className="form-field">
        <label htmlFor="text">Text</label>
        <input
          onChange={(event) => props.handleOnChange(props.index, event)}
          id="text"
          name="text"
          type="text"
          required={true}
          value={props.text}
        />
      </div>

      <div className="form-field">
        <label htmlFor="alignment">Alignment</label>
        <select
          onChange={(event) => props.handleOnChange(props.index, event)}
          name="alignment"
          id="alignment"
          required={true}
          value={props.alignment}
        >
          <option value="default" disabled={true}>
            Select a type
          </option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
          <option value="justify">Justify</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="urllink">Url link</label>
        <input
          onChange={(event) => props.handleOnChange(props.index, event)}
          id="urllink"
          name="urllink"
          type="text"
          required={true}
          value={props.urllink}
        />
      </div>

      {(props.type !== "image") & (props.type !== "table") ? (
        <>
          <label htmlFor="type">Type Text</label>
          <select
            onChange={(event) => props.handleOnChange(props.index, event)}
            defaultValue="default-typetext"
            name="type"
            id="type"
            required={true}
          >
            <option value="default-typetext" disabled={true}>
              Select a type
            </option>
            <option value="h1">Tittle 1</option>
            <option value="h2">Tittle 2</option>
            <option value="p">Simple</option>
          </select>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextField;
