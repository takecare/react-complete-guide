import React from 'react'
import styles from './Cockpit.css';

export const Cockpit = function (props) {
  const textStyle = props.totalNumberOfPersons <= 1 ? [styles.red, styles.bold].join(' ') : [styles.red]
  const toggleButtonStyle = [styles.CockpitButton, props.showingPersons ? styles.Red : ['']].join(' ')
  return (
    <div className={styles.Cockpit}>
      <header>
        {React.createElement('h1', { className: 'title' }, props.title)}
        <p className={textStyle}>It is working!</p>
      </header>

      <button onClick={() => props.ageChangeHandler(10)}>Set all ages to 10</button>
      <button className={toggleButtonStyle} onClick={props.togglePersonsHandler}>Toggle Persons</button>
    </div>
  )
}
