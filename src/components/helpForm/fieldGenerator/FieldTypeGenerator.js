import React from "react";
import TableField from "./tableField/TableField";
import TextField from "./textField/TextField";
import ImageField from "./imageField/ImageField";

const Field = (props) => {
  const getTag = () => {
    if (props.type === "title1" || props.type === "title2" || props.type === "simple") {
      return <TextField {...props} />;
    }

    switch (props.type) {
      case "image":
        return (
          <ImageField
            id={props.type}
            imageurl={props.imageurl}
            text={props.text}
          />
        );

      case "table":
        return (
          <TableField
            id={props.type}
            header={props.header} 
            textrow={props.textrow} />
          );

      default:
        return <>{props.text}</>;
    }
  };

  return (
    <>
      {getTag()}
    </>
  );
};

export default Field;
