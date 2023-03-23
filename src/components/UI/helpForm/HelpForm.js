import React from "react";
import "./HelpForm.css";
import Field from "./field/Field";
import Button from "../buttons/Button";

const HelpForm = (props) => {

  //call a function to fetch the information
  //function with fetchData... message with "loading..."
  //settimeout with 1s

  return (
    <div className="helpform">
      <div className="modal">
        {props.data.map((item, index)=>(
          <Field key={index} {...item}/>
        ))}
        <Button onShowModal={props.onShowModal}>Close</Button>
      </div>
    </div>
  );
};

export default HelpForm;