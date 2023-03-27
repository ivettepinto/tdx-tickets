import React from "react";
import "./HelpForm.css";
import Field from "./field/Field";
import Button from "../UI/buttons/Button";

const HelpForm = (props) => {
  return (
    <div className={`${props.view === "modalView" && "helpform"}`}>
      <div className={`${props.view === "modalView" && "modal"}`}>
        {props.data.map((item, index)=>(
          <Field key={index} {...item}/>
        ))}
        {
          props.view === "modalView" && <Button onShowModal={props.onShowModal}>Close</Button>
        }
      </div>
    </div>
  );
};

export default HelpForm;