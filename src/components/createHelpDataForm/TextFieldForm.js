import React from "react";
import "./CreateUpdateForm.css";
import { cssOptions } from "../../helpers/TypeOptions";
import SelectField from "../UI/input/SelectField";

const TextFieldForm = (props) => {
  return (
    <>
      {(props.type !== "image") & (props.type !== "table") ? (
        <>
          <label htmlFor="type" className="form-field">
            Type Text
          </label>
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
            <option value="title1">Tittle 1</option>
            <option value="title2">Tittle 2</option>
            <option value="simple">Simple</option>
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

      <div>
        <label htmlFor="classname" className="form-field">
          CSS Class
        </label>
        <select
          onChange={(event) => props.handleOnChange(props.index, event)}
          name="classname"
          id="classname"
          required={true}
          defaultValue=""
        >
          <option hidden={true} disabled={true} value="">
            Select a type
          </option>
          {cssOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
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
    </>
  );
};

export default TextFieldForm;
