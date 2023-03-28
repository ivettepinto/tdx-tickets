import React, { useState } from "react";
import CreateUpdateForm from "../components/createHelpDataForm/CreateUpdateForm";
import PreviewForm from "../components/previewHelpForm/PreviewForm";

const CreateUpdatePage = () => {
  const [previewerFields, setPreviewerFields] = useState([]);
  
  const getCreatingFields = (fields) => {
    setPreviewerFields((prevState) => ({
      ...prevState,
      fields,
    }));
  };
  return (
    <>
      <CreateUpdateForm onAddingFiels={getCreatingFields} />
      <PreviewForm fields={previewerFields.fields} />
    </>
  );
};

export default CreateUpdatePage;
