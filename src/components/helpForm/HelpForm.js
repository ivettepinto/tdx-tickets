import React from "react";
import "./HelpForm.css";

const HelpForm = (props) => {
  const handlerOnClick = () => {
    props.onShowModal(false);
  };

  return (
    <div className="helpform" onClick={handlerOnClick}>
      <div className="modal">
        Help Form
        <p> lorem </p>
        <p> lorem </p>
        <p> lorem </p>
        <p> lorem </p>
      </div>
    </div>
  );
};

export default HelpForm;
