import React from "react";
import CreateUpdateForm from "../components/createHelpDataForm/CreateUpdateForm";
import PreviewForm from "../components/previewHelpForm/PreviewForm";

import "./CreatePage.css";

const CreateUpdatePage = () => {
  
  return (
    <div className="container">
      <CreateUpdateForm />
      <PreviewForm />
    </div>
  );
};

export default CreateUpdatePage;
