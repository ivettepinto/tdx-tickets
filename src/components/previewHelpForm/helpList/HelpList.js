import React, { useContext } from "react";
import HelpListItem from "./HelpListItem";
import { HelpContext } from "../../../context/HelpFormsContext";

import "./HelpList.css";

const HelpList = () => {
  const { jsonData } = useContext(HelpContext);

  console.log("DATA",jsonData.fields);

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
          {jsonData.fields && jsonData.fields.map((item, index) => (
            <HelpListItem key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HelpList;
