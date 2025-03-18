import Student from './Student'

function App() {

    return (
      <>
        <Student name="Sadi" age={23} isStudent={true} />
        <Student name="Rahat" age={18} isStudent={true} />
        <Student name="Kamal" age={45} isStudent={false} />
        {/* using default values provided in the parameter */}
        <Student />
        {/* uses only jamal for name and default parameter value for rest of the values */}
        <Student name="Jamal" />
      </>
    )
}

export default App
