import React from 'react'
import HelpForm from '../helpForm/HelpForm'

const PreviewForm = ({props}) => {
  console.log(props.fields);
  return (
    <section className="preview-section">
        <h2 className="column-title">Preview</h2>
        {Array.isArray(props.fields) && (
          <HelpForm
            onShowModal={props.showModal}
            data={props.fields}
            view={"preview"}
          />
        )}
      </section>
  )
}

export default PreviewForm