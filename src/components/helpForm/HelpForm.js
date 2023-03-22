import React from 'react'
import './HelpForm.css';

const HelpForm = (props) => {
  const handlerOnClick = () => {
    props.onShowModal(false);
  }

  return (
    <div className='helpform' onClick={handlerOnClick}>
        <div className='modal'>Help Form</div>
    </div>
  )
}

export default HelpForm