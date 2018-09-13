import React, { Component } from 'react';
import { MyInput } from './MyInput/MyInput.js'
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {
        a: 'aaa',
        b: 'bbb',
        c: 'ccc'
      }
    }
  }

  inputChange(key, event) {
    const value = event.target.value
    this.setState(state => {
      return {
        data: {
          ...state.data,
          [key]: value
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">section 6</h1>
        </header>
        <div className="App-intro">
            {Object.keys(this.state.data).map(key => (
              <ErrorBoundary key={key}>
                <MyInput onChange={event => this.inputChange(key, event)} value={this.state.data[key]} />
              </ErrorBoundary>
            ))}
        </div>
      </div>
    )
  }
}

export default App;
