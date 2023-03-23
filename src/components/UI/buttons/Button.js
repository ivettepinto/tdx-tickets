import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
      <button onClick={props.onShowModal} className='HelpButton'>
        {props.children}
      </button>
  )
}

export default Button