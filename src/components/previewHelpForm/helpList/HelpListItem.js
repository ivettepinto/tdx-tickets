import React from "react";

import "./HelpList.css";

const HelpListItem = (props) => {
  return (
    <tr>
      <td>{props.category}</td>
      <td>{props.subcategory}</td>
      <td className="table-actions">
        <button onClick={() => console.log(props.id)}> Show preview</button>
        <button id="btn-delete">Delete </button>
      </td>
    </tr>
  );
};

export default HelpListItem;
