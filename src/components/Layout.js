import React,{useState} from 'react'
import Form from './form/Form'
import PreviewForm from './form/PreviewForm'

const Layout = () => {
    const[previewerFields, setPreviewerFields] = useState([]);
    
    const getCreatingFields = (fields) => {
        setPreviewerFields(prevState => ({
          ...prevState,
          fields
        }))
    }

    // console.log(previewerFields.fields);

  return (
    <>
        <Form onAddingFiels={getCreatingFields}/>
        <PreviewForm props={previewerFields} />
    </>
    
  )
}

export default Layout