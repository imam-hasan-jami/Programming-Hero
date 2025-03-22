import Student from './Student'

function App() {

    return (
      <>
        <Student name="Sadi" age={23} isStudent={true} />
        {/* using default values provided in the parameter */}
        <Student />
        {/* uses only jamal for name and default parameter value for rest of the values */}
        <Student name="Jamal" />

        {/* calling components declared in the same file */}
        <Sport name="Cricket" format="T20" />
        <Sport name="Football" format="90min" />
        <Pet />
        <Device name="iPhone" />

        {/* using array destructuring */}
        <Player name="Cristiano Ronaldo" goals="930" />
      </>
    )
}

function Sport(props) {
  return(
    <>
      <ul>
        <li>{props.name}, {props.format}</li>
      </ul>
    </>
  )
}

function Pet() {
  const petName = "Mimi";
  return(
    <p>I have a pet named {petName}</p>
  )
}

function Device(props) {
  return(
    <>
      <p>My primary device is {props.name}</p>
    </>
  )
}

// using array destructuring instead of props object
function Player({name, goals}) {
  return(
    <div>
      <h3>Player Name: {name}</h3>
      <p>Goals Scored: {goals}</p>
    </div>
  )
}

export default App
