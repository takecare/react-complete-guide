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
      { name: 'Fernando', age: 25 },
      { name: 'Maria', age: 24 },
      { name: 'Inês', age: 23 }
    ]
  }

  changeNameTo = (currentName, newName) => {
    const persons = this.state.persons
    const personIndex = persons.findIndex(p => p.name === currentName)
    const person = persons[personIndex]
    const newPerson = { ...person, name: newName }
    persons.splice(personIndex, 1, newPerson)
    this.setState({ persons: persons })
  }

  setAllToAge = age => {
    const persons = this.state.persons.map(p => ({ ...p, age: age }))
    this.setState({ persons: persons })
  }

  render() {
    return (
      <div className="App">

        <header>
          {React.createElement('h1', { className: 'title' }, 'Welcome to React!')}
          <p>It is working!</p>
        </header>

        <Person
          person={this.state.persons[0]}
          nameChanged={event => this.changeNameTo(this.state.persons[0].name, event.target.value)}
        />

        <Person
          person={this.state.persons[1]}
          click={this.changeNameTo.bind(this, this.state.persons[1].name, 'José')}
        />

        <Person person={this.state.persons[2]}>
          I have blue eyes.
        </Person>

        <button style={buttonStyle} onClick={() => this.setAllToAge(10)}>Set all ages to 10</button>

      </div>
    );
  }
}

export default App;
