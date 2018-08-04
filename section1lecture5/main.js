function Person (props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your Age: {props.age || "N/A"}</p>
    </div>
  )
}

const app = (
  <div>
      <Person name="Rui" age="30"/>
      <Person name="Ana" age="29"/>
  </div>
)

ReactDOM.render(
  app,
  document.querySelector('#app')
)