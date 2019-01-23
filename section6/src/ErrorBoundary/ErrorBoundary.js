import React, { Component } from 'react'

export class ErrorBoundary extends Component {

  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if (this.state.hasError) {
      return (<h3>Something went wrong.</h3>)
    }
    return this.props.children
  }
}
