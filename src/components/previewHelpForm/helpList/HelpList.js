import React from "react";
import HelpListItem from "./HelpListItem";

import "./HelpList.css";

const HelpList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>SubCategory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.listItems.map((item, index) => (
            <HelpListItem key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HelpList;
