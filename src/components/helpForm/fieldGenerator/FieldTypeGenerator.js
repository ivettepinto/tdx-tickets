import React from "react";
import TableField from "./tableField/TableField";
import TextField from "./textField/TextField";
import ImageField from "./imageField/ImageField";

const Field = (props) => {
  const getTag = () => {
    if (props.type === "h1" || props.type === "h2" || props.type === "p") {
      return <TextField {...props} />;
    }

    switch (props.type) {
      case "image":
        return (
          <ImageField
            align={props.align}
            imageurl={props.imageurl}
            text={props.text}
          />
        );

      case "table":
        return (
          <TableField 
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
