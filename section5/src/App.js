import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person'

const defaultButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid #ddd',
  padding: '8px',
  margin: '5px',
  curor: 'pointer'
}

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Fernando', age: 25 },
      { id: '1', name: 'Maria', age: 24 },
      { id: '2', name: 'Inês', age: 23 }
    ]
  }

  changeName = (id, newName) => {
    const persons = this.state.persons
    const personIndex = persons.findIndex(person => person.id === id)
    const person = persons[personIndex]
    const newPerson = { ...person, name: newName }
    persons.splice(personIndex, 1, newPerson)
    this.setState({ persons: persons })
  }

  setAllToAge = age => {
    const persons = this.state.persons.map(p => ({ ...p, age: age }))
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    // assigning an arrow function here guarantees that 'this' points to the context of the App class,
    // so we can reference 'this.setState()' in this click handler
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  renderPersons() {
    return (
      <div>
        {this.state.persons.map((person, index) => this.renderPerson(index, person))}
      </div>
    )
  }

  renderPerson(index, person) {
    return (
      <Person
        key={person.id}
        person={person}
        nameChanged={event => this.changeName(person.id, event.target.value)}
      >
        <button
          key={person.id}
          style={defaultButtonStyle}
          onClick={() => this.deletePersonHandler(index)}>
            Delete
          </button>
      </Person>
    )
  }

  render() {
    let persons
    let togglePersonsButtonStyle = defaultButtonStyle

    if (this.state.showPersons) {
      persons = this.renderPersons()
      togglePersonsButtonStyle = {
        ...togglePersonsButtonStyle,
        backgroundColor: 'red',
      }
    }

    const styleClasses = this.state.persons.length <= 1 ? [styles.red, styles.bold] : [styles.red]
    return (
      <div className={styles.App}>

        <header>
          {React.createElement('h1', { className: 'title' }, 'Welcome to React!')}
          <p className={styleClasses.join(' ')}>It is working!</p>
        </header>

        <button key='setages' style={defaultButtonStyle} onClick={() => this.setAllToAge(10)}>Set all ages to 10</button>
        <button key='toggle' style={togglePersonsButtonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

        </div>
    );
  }
}

export default App
