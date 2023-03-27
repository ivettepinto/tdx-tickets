import React,{useState} from 'react'
import Form from './form/Form'
import PreviewForm from './form/PreviewForm'

const Layout = () => {
    const[previewerFields, setPreviewerFields] = useState();
    
    const getCreatingFields = (fields) => {
        setPreviewerFields(fields)
    }

  return (
    <>
        <Form onAddingFiels={getCreatingFields}/>
        <PreviewForm previewerFields={previewerFields} />
    </>
    
  )
}

export default Layout