import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { ItemsContext } from "./context/ItemContext";

function App() {
  return (
    <ItemsContext.Provider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:id" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </ItemsContext.Provider>
  )
}

export default App
