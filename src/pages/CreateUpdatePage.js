import React, { useState } from 'react'
import CreateUpdateForm from '../components/createHelpDataForm/CreateUpdateForm'

const CreateUpdatePage = () => {
    const [previewerFields, setPreviewerFields] = useState([]);

    const getCreatingFields = (fields) => {
      setPreviewerFields((prevState) => ({
        ...prevState,
        fields,
      }));
    };
  return (
    <CreateUpdateForm onAddingFiels={getCreatingFields} />
  )
}

export default CreateUpdatePage