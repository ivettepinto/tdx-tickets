import React, { useState } from "react";

import Button from "../../UI/buttons/Button";
import ShowTemplateModal from "../../helpForm/ShowTemplateModal";
import getService from "../../../helpers/GetService";

import "./HelpList.css";

const HelpListItem = (props) => {
  const [isShow, setIsShow] = useState(false);

  const showModal = () => {
    if (isShow === true) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  const fetchData = (id) => {
    let result = getService(id);
    console.log(result);
    return result.field;
  }

  return (
    <>
      <tr>
        <td>{props.category}</td>
        <td>{props.subcategory}</td>
        <td className="table-actions">
          <Button onShowModal={showModal}>Show Preview</Button>
          <button id="btn-delete">Delete </button>
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
