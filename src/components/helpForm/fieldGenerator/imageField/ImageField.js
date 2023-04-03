import React from "react";

const ImageField = (props) => {
  return (
    <img
      style={{
        maxWidth: "25vw",
        maxHeight: "25vh",
      }}
      src={`${props.imageurl}`}
      alt={props.text}
    />
  );
};

export default ImageField;
