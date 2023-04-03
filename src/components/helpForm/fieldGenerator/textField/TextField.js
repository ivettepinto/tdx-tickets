import React from "react";

import '../../../../main.css';

const TextField = (props) => {
  const getTypeOfField = () => {
    switch (props.type) {
      case "title1":
        return props.urllink !== "" ? (
          <a id={props.type} className={props.classname} href={props.urllink}>
            <p>{props.text}</p>
          </a>
        ) : (
          <p id={props.type} className={props.classname}>{props.text}</p>
        );

      case "title2":
        return props.urllink !== "" ? (
          <a id={props.type} className={props.classname} href={props.urllink}>
            <p>{props.text}</p>
          </a>
        ) : (
          <p id={props.type} className={props.classname}>{props.text}</p>
        );

      case "simple":
        return props.urllink !== "" ? (
          <a id={props.type} className={props.classname} href={props.urllink}>
            <p>{props.text}</p>
          </a>
        ) : (
          <p id={props.type} className={props.classname}>{props.text}</p>
        );
      default:
        <>{props.text}</>;
        break;
    }
  };

  return <>{getTypeOfField()}</>;
};

export default TextField;
