import Navbar from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import FetchData from "./components/pages/fetchData/FetchData";
import Counter from "./components/common/counter/Counter";

function App() {
  return (
    <div>
      <Navbar />
      {/*<ItemListContainer />*/}
      <ItemDetailContainer />
      {/*<Counter />*/}
      {/*<FetchData />*/}
    </div>
  );
}

export default App;
