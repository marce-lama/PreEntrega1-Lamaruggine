import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productMock";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let id = 5;

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === id);
      resolve(productSelected);
    });

    promesa
      .then((resp) => setProduct(resp))
      .catch((error) => console.log(error));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };

  return (
    <ItemDetail
      product={product}
      agregarAlCarrito={agregarAlCarrito}
      stock={product.stock}
    />
  );
};

export default ItemDetailContainer;
