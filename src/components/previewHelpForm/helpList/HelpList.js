import React, { useContext } from "react";
import HelpListItem from "./HelpListItem";
import { HelpContext } from "../../../context/HelpFormsContext";

import "./HelpList.css";

const HelpList = () => {
  const { jsonData } = useContext(HelpContext);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jsonData && jsonData.map((item, index) => (
            <HelpListItem key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HelpList;
