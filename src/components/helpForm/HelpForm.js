import React from "react";
import "./HelpForm.css";
import Field from "../field/Field";

const HelpForm = (props) => {
  const handlerOnClick = () => {
    props.onShowModal(false);
  };

  return (
    <div className="helpform" onClick={handlerOnClick}>
      <div className="modal">
        {props.data.map((item, index)=>(
          <Field key={index} {...item}/>
        ))}

      </div>
    </div>
  );
};

export default HelpForm;