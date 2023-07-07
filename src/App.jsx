import Navbar from "./components/layout/navbar/Navbar";
import CartWidget from "./components/common/cartWidget/CartWidget";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h1>Aca esta el carrito</h1>} />

          <Route path="/*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
