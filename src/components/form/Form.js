import React, { useState, useEffect } from "react";

import "./Form.css";
import CreateField from "./createField/CreateField";
import Preview from "./preview/Preview";
import DetailField from "./detailField/DetailField";


const Form = () => {
  const [fields, setFields] = useState([]);

  const addFieldHandler = (field) => {
    setFields((prevFields) => {
      return [
        ...prevFields,
        { position:prevFields.length, ...field }
      ]
    });
    
  }

  const updateFieldHandler=(field) =>{
    //actualizacion
  }


  return (
    <article>
      <section>
        <CreateField addFieldHandler={addFieldHandler} />
        <DetailField fields={fields} updateFieldHandler={updateFieldHandler} />
      </section>
      <section>
        <Preview />
      </section>
    </article>
  );
};

export default Form;
