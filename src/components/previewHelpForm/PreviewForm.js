 import React from 'react'
import ShowTemplateModal from '../helpForm/ShowTemplateModal'

import "../createHelpDataForm/CreateUpdateForm.css";

const PreviewForm = (props) => {
  return (
    <section className="column">
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