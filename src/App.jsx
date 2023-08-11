import Autocomplete from './components/autocomplete'
import countries from "./data/country"

function App() {

  return (
    <>
      <Autocomplete countries={countries}/>
    </>
  )
}

export default App
