import React from "react";

const HelpListItem = (props) => {
  return (
    <>
      <td>{props.category}</td>
      <td>{props.subcategory}</td>
      <td>
        <button onClick={() => console.log(props.id)}> Show preview</button>
        <button> Delete </button>
      </td>
    </>
  );
};

export default HelpListItem;
