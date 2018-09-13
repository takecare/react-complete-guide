import React from 'react'
import Person from './Person/Person'

// nameChanged={event => this.changeName(props.person.id, event.target.value)}>
// onClick={() => this.deletePersonHandler(props.index)}>

function renderPerson(index, person, changeName, deletePersonHandler) {
  return (
    <Person
      key={person.id}
      person={person}
      nameChanged={event => changeName(person.id, event.target.value)}
    >
      <button
        key={person.id}
        onClick={() => deletePersonHandler(index)}>
          Delete
        </button>
    </Person>
  )
}

export const Persons = props => (
  props.persons.map((person, index) =>
    renderPerson(index, person, props.changeNameHandler, props.deletePersonHandler)
  )
)
