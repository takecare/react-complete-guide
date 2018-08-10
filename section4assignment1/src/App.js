import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import { CharComponent } from './CharComponent/CharComponent'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  textChanged(text) {
    this.setState({ text: text })
  }

  removeChar(index) {
    const text = this.state.text.split('')
    text.splice(index, 1)
    this.setState({ text: text.join('') })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Section 4 - Assignment 1</h1>
        </header>

        <input type="text" onChange={event => this.textChanged(event.target.value)} value={this.state.text} />
        <p>
          {this.state.text.length}
        </p>

        <ValidationComponent textLength={this.state.text.length} />

        {
          this.state.text.split('').map((char, index) => {
            return (<CharComponent key={index} char={char} removeHandler={() => this.removeChar(index)} />)
          })
        }
      </div>
    );
  }
}

export default App;
