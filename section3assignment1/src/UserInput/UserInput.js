import React from 'react'

const inputStyle = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid #ddd',
  padding: '8px',
  margin: '5px',
  curor: 'pointer'
}

const userInput = props => {
  return (
    <div style={inputStyle}>
      <input type="text" onChange={props.onInputChange} value={props.title} />
    </div>
  )
}

export default userInput