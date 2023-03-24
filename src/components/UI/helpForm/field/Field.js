import React from "react";
import TableField from "./tableField/TableField";
import TextField from "./textField/TextField";

const Field = (props) => {
  const getTag = () => {
    if (props.type === "h1" || props.type === "h2" || props.type === "p") {
      return <TextField {...props} />;
    }
    
    switch (props.type) {
      case "image":
        return (
          <img
            style={{
              textAlign: `${props.align} || left`,
              innerWidth: "10px",
              innerHeight: "10px",
            }}
            src={`${props.imageurl}`}
            alt={props.text}
          />
        );

      case "table":
        return <TableField header={props.header} textrow={props.textrow} />;

      default:
        // return <TextField {...props} />;
        <></>;
        break;
    }
  };

  return (
    <>
      <h2>{props.title}</h2>
      {getTag()}
    </>
  );
};

export default Field;
