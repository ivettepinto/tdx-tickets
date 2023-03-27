import React from 'react'
import HelpForm from '../helpForm/HelpForm'

const PreviewForm = (props) => {
  return (
    <section className="preview-section">
        <h2 className="column-title">Preview</h2>
        {props.fields.length > 0 && (
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