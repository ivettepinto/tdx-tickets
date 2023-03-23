import React from "react";
import TableField from "./tableField/TableField";
import TextField from "./textField/TextField";


const Field = (props) => {
  const getTag = () => {

    if(props.type === "title1" || props.type === "title2" || props.type === "simple") {
      return <TextField {...props} />;
    }

    switch (props.type) { 
      case "image" :
        return <img style={{ textAlign: `${props.align} || left` }} src = {`${props.imagurl}`} alt={props.text}></img>;

        case "table" :
          return <TableField header={props.header} textrow={props.textrow} />;

      default:
        // return <TextField {...props} />;
        <></>
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

export default Field