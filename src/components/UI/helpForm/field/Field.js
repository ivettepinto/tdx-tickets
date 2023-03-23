import React from "react";
import TableField from "./tableField/TableField";


const Field = (props) => {
  const getTag = () => {
    switch (props.type) {
      case "title1":
        return props.urllink !== "" ? 
        <a style={{ textAlign: `${props.align}` }} href={props.urllink}><h1>{props.text}</h1></a> 
        : <h1 style={{ textAlign: `${props.align}` }}>{props.text}</h1>;

      case "title2":
        return props.urllink !== "" ? 
        <a style={{ textAlign: `${props.align}` }} href={props.urllink}><h2>{props.text}</h2></a> 
        : <h2 style={{ textAlign: `${props.align}` }} data-url={props.urllink}>{props.text}</h2>;

      case "simple":
        return props.urllink !== "" ? 
        <a style={{ textAlign: `${props.align}` }} href={props.urllink}><p>{props.text}</p></a> 
        : <p style={{ textAlign: `${props.align}` }}>{props.text}</p>;

      case "image" :
        return <img style={{ textAlign: `${props.align} || left` }} src = {`${props.imagurl}`} alt={props.text}></img>;

        case "table" :
          return <TableField header={props.header} textrow={props.textrow} />;

      default:
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