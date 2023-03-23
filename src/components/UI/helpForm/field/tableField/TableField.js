import React from "react";

const TableField = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.header.map((item, index) => (
            <th key={index}>{item.text}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {props.textrow.map((item, index) => (
            <td key={index}>{item.text}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TableField;
