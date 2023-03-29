import React, { useState } from "react";
import CreateUpdateForm from "../components/createHelpDataForm/CreateUpdateForm";
import PreviewForm from "../components/previewHelpForm/PreviewForm";

import "./CreateUpdatePage.css";

const CreateUpdatePage = () => {
  const [previewerFields, setPreviewerFields] = useState([]);
  
  const getCreatingFields = (fields) => {
    setPreviewerFields((prevState) => ({
      ...prevState,
      fields,
    }));
  };
  return (
    <div className="container">
      <CreateUpdateForm onAddingFiels={getCreatingFields} />
      <PreviewForm fields={previewerFields.fields} />
    </div>
  );
};

export default CreateUpdatePage;
