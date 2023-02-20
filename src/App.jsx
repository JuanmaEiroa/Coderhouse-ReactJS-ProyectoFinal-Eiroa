import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcome welcome="Bienvenidos a Ortopedia FixSalud"/> }></Route>
          <Route exact path="/catalog" element={<ItemListContainer /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
