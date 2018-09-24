import React from 'react'
import Person from './Person/Person'
import styles from './Persons.css'

function renderPerson(index, person, changeName, deletePersonHandler, decreaseAge, increaseAge) {
  return (
    <Person
      key={person.id}
      person={person}
      nameChanged={event => changeName(person.id, event.target.value)}
      decreaseAge={() => decreaseAge(person.id)}
      increaseAge={() => increaseAge(person.id)}
    >
      <button
        className={styles.Persons.Red}
        key={person.id}
        onClick={() => deletePersonHandler(index)}>
        Delete
      </button>
    </Person>
  )
}

export const Persons = props => {
  return (
    <div className={styles.Persons}>
      {props.persons.map((person, index) => renderPerson(
        index,
        person,
        props.changeNameHandler,
        props.deletePersonHandler,
        props.decreaseAge,
        props.increaseAge
      ))}
    </div>
  )
}
