import React from 'react'
import './CharComponent.css'

export const CharComponent = (props) => {
  return (
    <span className='char' onClick={props.removeHandler}>
      {props.char}
    </span>
  )
}