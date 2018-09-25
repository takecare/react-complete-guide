import React, { Component } from 'react';
import styles from './App.css';
import { Cockpit } from '../components/Cockpit/Cockpit'
import { Persons } from '../components/Persons/Persons'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: '0', name: 'Fernando', age: 25 },
        { id: '1', name: 'Maria', age: 24 },
        { id: '2', name: 'Inês', age: 23 }
      ]
    }
  }

  componentWillMount() {
    console.log('> will mount App')
  }

  componentDidMount() {
    console.log('> did mount App')
  }

  replacePerson(id, newPerson) {
    const persons = this.state.persons
    const personIndex = persons.findIndex(person => person.id === id)
    persons.splice(personIndex, 1, newPerson)
    this.setState({ persons: persons })
  }

  changeName = (id, newName) => {
    const persons = this.state.persons
    const personIndex = persons.findIndex(person => person.id === id)
    const person = persons[personIndex]
    const newPerson = { ...person, name: newName }
    persons.splice(personIndex, 1, newPerson)
    this.setState({ persons: persons })
  }

  setAllAgesTo = age => {
    const persons = this.state.persons.map(p => ({ ...p, age: age }))
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    // assigning/using an arrow function here guarantees that 'this' points to the context of the App class,
    // so we can reference 'this.setState()' in this click handler
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  changeAge = (id, by) => {
    const person = this.state.persons.find(person => person.id === id)
    this.replacePerson(id, {...person, age: person.age + by})
  }

  render() {
    console.log('> render App')

    let persons
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          changeNameHandler={this.changeName}
          deletePersonHandler={this.deletePersonHandler}
          decreaseAge={(id) => this.changeAge(id , -1)}
          increaseAge={(id) => this.changeAge(id , +1)}
        />
    }

    return (
      <div className={styles.App}>

        <Cockpit
          title={this.props.title}
          ageChangeHandler={this.setAllAgesTo}
          togglePersonsHandler={this.togglePersonsHandler}
          totalNumberOfPersons={this.state.persons.length}
          showingPersons={this.state.showPersons}
        />

        {persons}

        </div>
    );
  }
}

export default App
