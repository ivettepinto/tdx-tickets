import React, { useState, useContext } from "react";

import Button from "../../UI/buttons/Button";
import ShowTemplateModal from "../../helpForm/ShowTemplateModal";
import { useNavigate } from "react-router-dom";

import { HelpContext } from "../../../context/HelpFormsContext";
import "./HelpList.css";

const HelpListItem = (props) => {
  const { getDataById, removeDataById } = useContext(HelpContext);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    if (isShow === true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  const fetchData = (id) => {
    let result = getDataById(id);
    return result.field;
  }

  const onDeleteHandler = () => {
    const option = window.confirm("Are you sure you want to delete this item?");
    if(option === true){
      removeDataById(props.id);
    }
  }

  const onEditHanler = () => {
    navigate(`/edit/${props.id}`)
  }

  return (
    <>
      <tr>
        <td>{props.field[0].text}</td>
        <td className="table-actions">
          <Button onShowModal={showModal}>Show Preview</Button>
          <button id="btn-edit" onClick={onEditHanler}>Edit</button>
          <button id="btn-delete" onClick={onDeleteHandler}>Delete </button>
          {isShow && (
        <ShowTemplateModal
          onShowModal={showModal}
          data={fetchData(props.id)}
          view={"modalView"}
        />
      )}
        </td>
      </tr>
    </>
  );
};

export default HelpListItem;
