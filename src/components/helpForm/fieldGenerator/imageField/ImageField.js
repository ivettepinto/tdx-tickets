import React from "react";

const ImageField = (props) => {
  return (
    <img
      src={`${props.imageurl}`}
      alt={props.text}
      className={props.className}
    />
  );
};

export default ImageField;
