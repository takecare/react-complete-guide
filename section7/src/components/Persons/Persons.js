import React, { PureComponent } from 'react'
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

// pure components implement shouldComponentUpdate() by comparing every bit of the state object,
// they should be used judiciously, because such comparison can be costly when not needed,
// (e.g.if you compare changes in a parent component already you likely don't need a pure component)
export class Persons extends PureComponent {

  componentWillMount() {
    console.log('[Persons] will mount Persons')
  }

  componentDidMount() {
    console.log('[Persons] did mount Persons')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Persons] will receive props:', nextProps)
  }

  componentWillUpdate() {
    console.log('[Persons] componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('[Persons] componentDidUpdate: can cause side effects. do not update state (triggers re-render).')
  }

  render() {
    console.log('[Persons] render Persons')

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
