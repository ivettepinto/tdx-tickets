import React, { useContext } from "react";
import "./HelpForm.css";
import FieldTypeGenerator from "./fieldGenerator/FieldTypeGenerator";
import Button from "../UI/buttons/Button";
import { HelpContext } from "../../context/HelpFormsContext";

const ShowTemplateModal = (props) => {

  const { fields: {newFields} } = useContext(HelpContext);
  
  return (
    <div className={`${props.view === "modalView" && "helpform"}`}>
      <div className={`${props.view === "modalView" && "modal"}`}>
        {newFields && newFields.map((item, index)=>( 
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