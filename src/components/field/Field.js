import React from "react";
import TableField from "../tableField/TableField";


const Field = (props) => {
  const getTag = () => {
    switch (props.type) {
      case "title1":
        return <h1>{props.text}</h1>;

      case "title2":
        return <h2>{props.text}</h2>;

      case "simple":
        return <p>{props.text}</p>;

      case "image" :
        return <img src = {`${props.urllink}`} alt={props.text}></img>;

        case "table" :
          return <TableField header={props.header} textrow={props.textrow} />;

      default:
        break;
    }
  };


  return (
    <div>
      <h2>{props.title}</h2>
      {getTag()}
      
      

    </div>
  );
};

export default Field