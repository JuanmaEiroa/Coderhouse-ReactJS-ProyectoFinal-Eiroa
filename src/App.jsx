import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer welcome="Bienvenidos a Ortopedia FixSalud"/>
    </div>
  )
}

export default App
