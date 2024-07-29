import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListCon } from "./components/ItemListCon";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListCon greeting="Bienvenidos a Noxus"/>}></Route>
        <Route path="/category" element={"Bienvenidos a Noxus"}></Route>
        <Route path="/detalles" element={<h1>Detalles</h1>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
