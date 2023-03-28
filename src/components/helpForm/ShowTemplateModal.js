import React from "react";
import "./HelpForm.css";
import FieldTypeGenerator from "./fieldGenerator/FieldTypeGenerator";
import Button from "../UI/buttons/Button";

const ShowTemplateModal = (props) => {
  return (
    <div className={`${props.view === "modalView" && "helpform"}`}>
      <div className={`${props.view === "modalView" && "modal"}`}>
        {props.data.map((item, index)=>(
          <FieldTypeGenerator key={index} {...item}/>
        ))}
        {
          props.view === "modalView" && <Button onShowModal={props.onShowModal}>Close</Button>
        }
      </div>
    </div>
  );
};

export default ShowTemplateModal;