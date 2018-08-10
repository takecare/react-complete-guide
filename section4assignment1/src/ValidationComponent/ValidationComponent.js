import React from 'react'

export default (props) => {
  let message

  if (props.textLength <= 5) {
    message = (<p>Text too short</p>)
  } else {
    message = (<p>Text long enough</p>)
  }

  return (
    <div>
      {message}
    </div>
  )
}
