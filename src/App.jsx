import Home from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const saludo1 = "Hola";
  const saludo2 = "Bienvenido a mi nuevo proyecto!!!";

  return (
    <div>
      <Home />
      <ItemListContainer saludoA={saludo1} saludoB={saludo2} />
    </div>
  );
}

export default App;
