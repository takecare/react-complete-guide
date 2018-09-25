import React, { Component } from 'react'
import Person from './Person/Person'
import styles from './Persons.css'

function renderPerson(index, person, changeName, deletePersonHandler, decreaseAge, increaseAge) {
  return (
    <Person
      key={person.id}
      person={person}
      nameChanged={event => changeName(person.id, event.target.value)}
      decreaseAge={() => decreaseAge(person.id)}
      increaseAge={() => increaseAge(person.id)}>
      <button
        className={styles.Persons.Red}
        key={person.id}
        onClick={() => deletePersonHandler(index)}>
        Delete
      </button>
    </Person>
  )
}

export class Persons extends Component {

  componentWillMount() {
    console.log('> will mount Persons')
  }

  componentDidMount() {
    console.log('> did mount Persons')
  }

  render() {
    console.log('> render Persons')

    return (
      <div className={styles.Persons}>
        {this.props.persons.map((person, index) => renderPerson(
          index,
          person,
          this.props.changeNameHandler,
          this.props.deletePersonHandler,
          this.props.decreaseAge,
          this.props.increaseAge
        ))}
      </div>
    )
  }
}
