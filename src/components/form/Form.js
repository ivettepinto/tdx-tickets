import React, { useState, useEffect } from "react";

import "./Form.css";
import CreateField from "./createField/CreateField";
import Preview from "./preview/Preview";
import DetailField from "./detailField/DetailField";


const Form = () => {

  return (
    <article>
      <section>
        <CreateField />
        <DetailField />
      </section>
      <section>
        <Preview />
      </section>
    </article>
  );
};

export default Form;
