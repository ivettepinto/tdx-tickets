import React from "react";

import "./CreateUpdateForm.css";

const ImageFieldForm = (props) => {
  return (
    <>
      <div className="form-field">
      <label htmlFor="imageurl">Image Url</label>
      <input
        onChange={event => props.handleOnChange(props.index, event)}
        name="imageurl"
        id="imageurl"
        type="text"
        required={true}
        value={props.imageurl}
      />
      </div>
    </>
  );
};

export default ImageFieldForm;
