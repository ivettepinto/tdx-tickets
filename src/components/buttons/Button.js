import React from 'react'
import './Button.css'

const Button = (props) => {

  const handlerOnClick = () => {
    //pasar un booleano
    props.onShowModal(true);
  } 

  return (
      <button onClick={handlerOnClick} className='HelpButton'>
        {props.children}
      </button>
  )
}

export default Button