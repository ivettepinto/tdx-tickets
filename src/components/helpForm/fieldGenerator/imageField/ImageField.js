import React from 'react'

const ImageField = (props) => {
  return (
    <img
            style={{
              textAlign: `${props.align} || left`,
              innerWidth: "10px",
              innerHeight: "10px",
            }}
            src={`${props.imageurl}`}
            alt={props.text}
          />
  )
}

export default ImageField