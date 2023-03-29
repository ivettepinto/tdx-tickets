 import React from 'react'
import ShowTemplateModal from '../helpForm/ShowTemplateModal'

import "../createHelpDataForm/CreateUpdateForm.css";

const PreviewForm = () => {
  return (
    <section className="column">
        <h2 className="column-title">Preview</h2>
          <ShowTemplateModal
            view={"preview"}
          />
      </section>
  )
}

export default PreviewForm