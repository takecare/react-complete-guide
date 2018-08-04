import React from 'react'
import './UserOutput.css'

const userOutput = props => {
  // TODO
  return (
    <div className="UserOutput">
      <h1>{props.title || 'no title'}</h1>
      <p>{props.description || 'no description'}</p>
    </div>
  )
}

export default userOutput