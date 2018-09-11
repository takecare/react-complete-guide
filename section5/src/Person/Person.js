import React from 'react'
import Radium from 'radium'
import './Person.css'

const style = {
  '@media (min-width: 500px)': {
    width: '450px'
  },
  '@media (max-width: 500px)': {
    backgroundColor: '#eecccccc'
  }
}

const person = (props) => {
  const age = props.person.age || Math.floor(Math.random() * 30)
  const children = props.children

  return (
    <div className='Person' onClick={props.click} style={style}>
      <p>I'm a person, my name is {props.person.name} and I am {age} years old.</p>
      <p>{children}</p>
      <input type="text" onChange={props.nameChanged} value={props.person.name} />
    </div>
  )
}

export default Radium(person);
