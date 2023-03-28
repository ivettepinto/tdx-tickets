import React, { useState } from "react";
import CreateUpdateForm from "./createHelpDataForm/CreateUpdateForm";
import PreviewForm from "./previewHelpForm/PreviewForm";

const HelpMainContainer = () => {
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
      <PreviewForm props={previewerFields} />
    </>
  );
};

export default HelpMainContainer;
