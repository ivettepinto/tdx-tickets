import React, { useContext, useState } from "react";
import CreateUpdateForm from "../components/createHelpDataForm/CreateUpdateForm";
import PreviewForm from "../components/previewHelpForm/PreviewForm";

import "./CreateUpdatePage.css";

const CreateUpdatePage = () => {
  
  return (
    <div className="container">
      <CreateUpdateForm />
      <PreviewForm />
    </div>
  );
};

export default CreateUpdatePage;
