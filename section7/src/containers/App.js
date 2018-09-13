import React, { Component } from 'react';
import styles from './App.css';
import { Persons } from '../components/Persons/Persons'

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

  render() {
    let persons
    let togglePersonsButtonStyle = styles.button

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changeNameHandler={this.changeName}
          deletePersonHandler={this.deletePersonHandler}
        />
      )

      togglePersonsButtonStyle = {
        ...togglePersonsButtonStyle,
        backgroundColor: 'red',
      }
    }

    const styleClasses = this.state.persons.length <= 1 ? [styles.Red, styles.bold] : [styles.Red]
    return (
      <div className={styles.App}>

        <header>
          {React.createElement('h1', { className: 'title' }, 'Welcome to React!')}
          <p className={styleClasses.join(' ')}>It is working!</p>
        </header>

        <button key='setages' onClick={() => this.setAllToAge(10)}>Set all ages to 10</button>
        <button key='toggle' style={togglePersonsButtonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

        </div>
    );
  }
}

export default App
