import React from 'react'
import classes from './Section.module.css'

function Section(props) {
  return (
    <section className={`${classes.main} ${props.className? props.className :''}`}     >
            {props.children}
        </section>
  )
}

export default Section