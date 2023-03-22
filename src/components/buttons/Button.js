import React from 'react'

const Button = (props) => {

  const handlerOnClick = () => {
    //pasar un booleano
    props.onShowModal();
  } 

  return (
      <button onClick={handlerOnClick}>
        {props.children}
      </button>
  )
}

export default Button