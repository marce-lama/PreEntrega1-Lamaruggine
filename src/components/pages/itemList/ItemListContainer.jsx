import ItemList from "./ItemList";
import { products } from "../../productMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsFilter = products.filter(
      (elemento) => elemento.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFilter : products);
      //reject("Salio todo mal");
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
