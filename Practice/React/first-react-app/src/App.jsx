import Student from './Student'

function App() {

    return (
      <>
        <Student name="Sadi" age={23} isStudent={true} />
        <Student name="Rahat" age={18} isStudent={true} />
        <Student name="Kamal" age={45} isStudent={false} />
      </>
    )
}

export default App
