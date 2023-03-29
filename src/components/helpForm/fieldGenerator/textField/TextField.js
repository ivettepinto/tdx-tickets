import React from "react";

import '../../../../main.css';

const TextField = (props) => {
  const getTypeOfField = () => {
    switch (props.type) {
      case "h1":
        return props.urllink !== "" ? (
          <a style={{ textAlign: `${props.align}` }} className={props.classname} href={props.urllink}>
            <h1>{props.text}</h1>
          </a>
        ) : (
          <h1 style={{ textAlign: `${props.align}` }} className={props.classname}>{props.text}</h1>
        );

      case "h2":
        return props.urllink !== "" ? (
          <a style={{ textAlign: `${props.align}` }} className={props.classname} href={props.urllink}>
            <h2>{props.text}</h2>
          </a>
        ) : (
          <h2 style={{ textAlign: `${props.align}` }} className={props.classname}>{props.text}</h2>
        );

      case "p":
        return props.urllink !== "" ? (
          <a style={{ textAlign: `${props.align}` }} className={props.classname} href={props.urllink}>
            <p>{props.text}</p>
          </a>
        ) : (
          <p style={{ textAlign: `${props.align}` }} className={props.classname}>{props.text}</p>
        );
      default:
        <>{props.text}</>;
        break;
    }
  };

  return <>{getTypeOfField()}</>;
};

export default TextField;
