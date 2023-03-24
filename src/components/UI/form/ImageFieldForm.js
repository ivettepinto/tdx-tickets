import React from "react";

const ImageField = (props) => {
  return (
    <>
      <label htmlFor="imageurl">Image Url</label>
      <input
        onChange={event => props.handleOnChange(props.index, event)}
        name="imageurl"
        id="imageurl"
        type="text"
        required={true}
        value={props.imageurl}
      />
      <br />
    </>
  );
};

export default ImageField;
