import React, { useState } from "react";
import CreateUpdateForm from "./createHelpDataForm/CreateUpdateForm";
import PreviewForm from "./previewHelpForm/PreviewForm";
import HelpList from "./previewHelpForm/helpList/HelpList";
import listItemsJson from "../CompleteExample.json"

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
      <HelpList listItems={listItemsJson}/>
    </>
  );
};

export default HelpMainContainer;
