import React, { Component } from 'react'
import styles from './Person.css'
import { statefulWithClass } from '../../../hoc/statefulWithClass'
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person] will mount Person')
  }

  componentDidMount() {
    console.log('[Person] did mount Person')
  }

  focusInput() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person] render Person')

    const age = this.props.person.age || Math.floor(Math.random() * 30)
    const children = this.props.children
    return (
      <div onClick={this.props.click}>
        <p>I'm a person, my name is <span className="bold">{this.props.person.name}</span> and I am {age} years old.</p>
        <p>
          <button className={styles.decrease} onClick={this.props.decreaseAge}>-</button>
          {children}
          <button className={styles.increase} onClick={this.props.increaseAge}>+</button>
        </p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.nameChanged}
          value={this.props.person.name} />
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  increaseAge: PropTypes.func,
  decreaseAge: PropTypes.func,
  person: (props, propName, componentName) => {
    if (typeof props[propName].name !== 'string'
      || typeof props[propName].age !== 'number') {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}.`);
    }
  }
}

export default statefulWithClass(Person, styles.Person)
