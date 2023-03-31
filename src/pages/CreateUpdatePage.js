import React, { useContext } from "react";
import { HelpContext } from '../context/HelpFormsContext';
import { useParams } from 'react-router-dom';
import CreateUpdateForm from "../components/createHelpDataForm/CreateUpdateForm";
import PreviewForm from "../components/previewHelpForm/PreviewForm";

import "./CreateUpdatePage.css";

const CreateUpdatePage = () => {
  const { id } = useParams();
  const { getDataById } = useContext(HelpContext);
  const helpFormToEdit = getDataById(id) ?? [];

  return (
    <div className="container">
      <CreateUpdateForm data={helpFormToEdit} />
      <PreviewForm />
    </div>
  );
};

export default CreateUpdatePage;
