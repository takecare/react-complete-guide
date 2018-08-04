import React, { Component } from 'react'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css'

class App extends Component {

  state = {
    title: 'headline',
    description: 'body'
  }

  onInputChange(event) {
    const title = event.target.value
    this.setState({
      ...this.state,
      title: title
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput onInputChange={event => this.onInputChange(event)} title={this.state.title} />
        <UserOutput title={this.state.title} description={this.state.description} />
        <UserOutput title={this.state.title} description={this.state.description}/>
      </div>
    );
  }
}

export default App;
