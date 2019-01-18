import React from 'react';

export const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
    {console.log(props)}
      <WrappedComponent {...props}/>
    </div>
  )
}
