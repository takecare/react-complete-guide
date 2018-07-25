import React, { Component } from 'react';

const person = (props) => {
  const age = props.person.age || Math.floor(Math.random() * 30)
  const children = props.children
  return (
    <div onClick={props.click}>
      <p>I'm a person, my name is {props.person.name} and I am {age} years old.</p>
      <p>{children}</p>
    </div>
  )
}

export default person;
