import React, { Component } from 'react';

export const statefulWithClass = (WrappedComponent, className) => {
  const StatefulWithClass = class StatefulWithClass extends Component {
    componentDidMount() {
      console.log('[statefulWithClass] ounting stateful wrapped component');
    }

    render() {
      return (
        <div className={className}>
          <WrappedComponent className={className} ref={this.props.forwardRef} {...this.props}/>
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <StatefulWithClass {...props} forwardRef={ref} />;
  })
}
