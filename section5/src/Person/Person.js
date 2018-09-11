import React from 'react'
import styles from './Person.css'

const person = (props) => {
  const age = props.person.age || Math.floor(Math.random() * 30)
  const children = props.children

  return (
    <div className={styles.Person} onClick={props.click}>
      <p>I'm a person, my name is {props.person.name} and I am {age} years old.</p>
      <p>{children}</p>
      <input type="text" onChange={props.nameChanged} value={props.person.name} />
    </div>
  )
}

export default person