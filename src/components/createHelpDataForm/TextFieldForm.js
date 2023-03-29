import React from "react";

import "./CreateUpdateForm.css";

const TextFieldForm = (props) => {
  return (
    <>
      {(props.type !== "image") & (props.type !== "table") ? (
        <>

          <label htmlFor="type" className="form-field">Type Text</label>
          <select
            onChange={(event) => props.handleOnChange(props.index, event)}
            name="type"
            id="type"
            required={true}
            defaultValue=""
          >
            <option hidden={true} disabled={true} value="">
              Select a type
            </option>
            <option value="h1">Tittle 1</option>
            <option value="h2">Tittle 2</option>
            <option value="p">Simple</option>
          </select>
        </>
      ) : (
        <></>
      )}
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
        <label htmlFor="align">Alignment</label>
        <select
          onChange={(event) => props.handleOnChange(props.index, event)}
          name="align"
          id="align"
          required={true}
          defaultValue=""
        >
          <option hidden={true} disabled={true} value="">
            Select a type
          </option>
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="center">Center</option>
          <option value="justify">Justify</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="classname">CSS Class</label>
        <input
          onChange={(event) => props.handleOnChange(props.index, event)}
          id="classname"
          name="classname"
          type="classname"
          value={props.classname}
        />
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
    </>
  );
};

export default TextFieldForm;
