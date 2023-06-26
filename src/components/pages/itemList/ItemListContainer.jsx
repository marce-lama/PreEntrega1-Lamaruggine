import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [contador, setContador] = useState(0);

  return <ItemList contador={contador} setContador={setContador} />;
};

export default ItemListContainer;
