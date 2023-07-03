import ItemList from "./ItemList";
import { products } from "../../productMock";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject("Salio todo mal");
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
