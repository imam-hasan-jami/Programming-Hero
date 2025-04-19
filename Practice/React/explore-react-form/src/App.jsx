import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FamilyTree from './Components/FamilyTree/FamilyTree'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UncontrolledField from './Components/UncontrolledField/UncontrolledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>

      {/* <SimpleForm />
      <FormAction />
      <ControlledField /> 
      <UncontrolledField />
      <HookForm />
      <ProductManagement /> */}
      <FamilyTree />
    </>
  )
}

export default App
