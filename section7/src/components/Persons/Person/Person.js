import React, { Component } from 'react'
import styles from './Person.css'
import { withClass } from '../../../hoc/withClass'
import { statefulWithClass } from '../../../hoc/statefulWithClass'

class Person extends Component {

  componentWillMount() {
    console.log('[Person] will mount Person')
  }

  componentDidMount() {
    console.log('[Person] did mount Person')
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
        <input type="text" onChange={this.props.nameChanged} value={this.props.person.name} />
      </div>
    )
  }
}

export default statefulWithClass(Person, styles.Person)
