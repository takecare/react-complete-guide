import React, { PureComponent } from 'react'
import Person from './Person/Person'
import styles from './Persons.css'
import { WithClasses } from '../../hoc/WithClasses'

function renderPerson(index, person, props, lastPersonRef) {
  return (
    <Person
      key={person.id}
      person={person}
      nameChanged={event => props.changeName(person.id, event.target.value)}
      decreaseAge={() => props.decreaseAge(person.id)}
      increaseAge={() => props.increaseAge(person.id)}
      ref={lastPersonRef}>
      <button
        className={styles.Persons.Red}
        key={person.id}
        onClick={() => props.deletePersonHandler(index)}>
        Delete
      </button>
    </Person>
  );
}

// pure components implement shouldComponentUpdate() by comparing every bit of the state object,
// they should be used judiciously, because such comparison can be costly when not needed,
// (e.g.if you compare changes in a parent component already you likely don't need a pure component)
export class Persons extends PureComponent {

  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons] will mount Persons')
  }

  componentDidMount() {
    console.log('[Persons] did mount Persons')
    if (this.props.isAuthenticated) {
      this.lastPersonRef.current.focusInput();
    }
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

    return this.props.authenticated ? (
      <WithClasses classes={styles.Persons}>
        {this.props.persons.map((person, index) => renderPerson(
          index,
          person,
          this.props,
          this.lastPersonRef
        ))}
      </WithClasses>
    ) : (<p>Unauthorized</p>)
  }
}
