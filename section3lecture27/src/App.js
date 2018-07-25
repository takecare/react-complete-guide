import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Fernando', age: 25 },
      { name: 'Maria', age: 24 },
      { name: 'Inês', age: 23 }
    ]
  }

  buttonHandler = age => {
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

        <Person person={this.state.persons[0]} />
        <Person
          person={this.state.persons[1]}
          click={this.buttonHandler.bind(this, 20)}
        />
        <Person person={this.state.persons[2]}>
          I have blue eyes.
        </Person>

        <button onClick={() => this.buttonHandler(10)}>Do stuff!</button>

      </div>
    );
  }
}

export default App;
