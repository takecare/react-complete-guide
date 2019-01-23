import React, { Component } from 'react';
import styles from './App.css';
import { Cockpit } from '../components/Cockpit/Cockpit'
import { Persons } from '../components/Persons/Persons'
import Aux from '../hoc/Aux'
import { withClass } from '../hoc/withClass'

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: '0', name: 'Fernando', age: 25 },
        { id: '1', name: 'Maria', age: 24 },
        { id: '2', name: 'Inês', age: 23 }
      ],
      isAuthenticated: false,
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App] will mount App')
  }

  componentDidMount() {
    console.log('[App] did mount App')
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.showPersons !== nextState.showPersons
      || this.state.persons !== nextState.persons
      || this.state.isAuthenticated !== nextState.isAuthenticated
  }

  replacePerson(id, newPerson) {
    const persons = [...this.state.persons]
    const personIndex = persons.findIndex(person => person.id === id)
    persons.splice(personIndex, 1, newPerson)
    this.setState({ persons: persons })
  }

  changeName = (id, newName) => {
    const persons = [...this.state.persons]
    const personIndex = persons.findIndex(person => person.id === id)
    const person = persons[personIndex]
    const newPerson = { ...person, name: newName }
    persons.splice(personIndex, 1, newPerson)
    this.setState({ persons: persons })
  }

  handleLogin = () => {
    //this.setState({ isAuthenticated: true });
    this.setState((previousState, props) => ({ isAuthenticated: !previousState.isAuthenticated }))
  }

  setAllAgesTo = age => {
    const persons = this.state.persons.map(p => ({ ...p, age: age }))
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    // assigning/using an arrow function here guarantees that 'this' points to the context of the App class,
    // so we can reference 'this.setState()' in this click handler
    this.setState((previousState, props) => ({ showPersons: !previousState.showPersons })) // react handles state merging
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  changeAge = (id, by) => {
    const person = this.state.persons.find(person => person.id === id)
    this.replacePerson(id, {...person, age: person.age + by})
  }

  render() {
    console.log('[App] render App')

    let persons
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          changeNameHandler={this.changeName}
          deletePersonHandler={this.deletePersonHandler}
          decreaseAge={(id) => this.changeAge(id , -1)}
          increaseAge={(id) => this.changeAge(id, +1)}
          authenticated={this.state.isAuthenticated}
        />
    }

    return (
      <Aux>
        <Cockpit
          title={this.props.title}
          ageChangeHandler={this.setAllAgesTo}
          loginHandler={this.handleLogin}
          togglePersonsHandler={this.togglePersonsHandler}
          totalNumberOfPersons={this.state.persons.length}
          showingPersons={this.state.showPersons}
          authenticated={this.state.isAuthenticated}
        />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, styles.App)
