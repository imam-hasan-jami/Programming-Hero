import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UncontrolledField from './Components/UncontrolledField/UncontrolledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>

      {/* <SimpleForm />
      <FormAction />
      <ControlledField /> */}
      <UncontrolledField />
    </>
  )
}

export default App
