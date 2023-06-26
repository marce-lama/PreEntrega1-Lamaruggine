import Navbar from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
