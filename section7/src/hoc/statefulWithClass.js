import React, { Component } from 'react';

export const statefulWithClass = (WrappedComponent, className) => {
  return class StatefulWithClass extends Component {

    componentDidMount() {
      console.log('> mounting stateful wrapped component')
    }

    render() {
      return (
        <div className={className}>
          <WrappedComponent className={className} {...this.props} />
        </div>
      )
    }
  }
}
