import React from 'react';

export const WithClasses = (props) => (
  <div className={props.classes}>
    {props.children}
  </div>
)
