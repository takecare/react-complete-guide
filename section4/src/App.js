import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const buttonStyle = {
  backgroundColor: 'white',
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
    // assigning an arrow function to this method guarantees that 'this' points to the context of the class
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  persons() {
    return (
      <div>
        {
          this.state.persons.map((person, index) => {
            return (
              <div>
                <Person
                  key={person.id}
                  person={person}
                  nameChanged={event => this.changeName(person.id, event.target.value)}
                >
                  <button style={buttonStyle} onClick={() => this.deletePersonHandler(index)}>Delete</button>
                </Person>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    const persons = this.state.showPersons ? this.persons() : null

    return (
      <div className="App">

        <header>
          {React.createElement('h1', { className: 'title' }, 'Welcome to React!')}
          <p>It is working!</p>
        </header>

        <button style={buttonStyle} onClick={() => this.setAllToAge(10)}>Set all ages to 10</button>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}

      </div>
    );
  }
}

export default App;
