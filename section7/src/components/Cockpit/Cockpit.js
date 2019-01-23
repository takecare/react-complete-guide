import React from 'react'
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux'

const Cockpit = React.memo(function (props) { // functional component: does not have state and no way to manage lifecycle
  const textStyle = props.totalNumberOfPersons <= 1 ? [styles.red, styles.bold].join(' ') : [styles.red];
  const toggleButtonStyle = [styles.CockpitButton, props.showingPersons ? styles.Red : ['']].join(' ');
  const authButtonStyle = props.authenticated ? styles.CockpitButton : styles.Button;
  const authText = props.authenticated ? 'Logout' : 'Login';
  return (
    <Aux>
      <header>
        {React.createElement('h1', { className: 'title' }, props.title)}
        <p className={textStyle}>It is working!</p>
      </header>

      <button className={authButtonStyle} onClick={() => props.loginHandler()}>{authText}</button>
      <button className={styles.Button} onClick={() => props.ageChangeHandler(10)}>Set all ages to 10</button>
      <button className={toggleButtonStyle} onClick={props.togglePersonsHandler}>Toggle Persons</button>
    </Aux>
  )
})

export { Cockpit };
