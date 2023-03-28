 import React from 'react'
import ShowTemplateModal from '../helpForm/ShowTemplateModal'

const PreviewForm = (props) => {
  return (
    <section className="preview-section">
        <h2 className="column-title">Preview</h2>
          <ShowTemplateModal
            onShowModal={props.showModal}
            data={props.fields}
            view={"preview"}
          />
      </section>
  )
}

export default PreviewForm