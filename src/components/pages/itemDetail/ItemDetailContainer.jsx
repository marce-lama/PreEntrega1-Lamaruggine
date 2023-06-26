import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({
    id: 1,
    name: "Telefono",
    price: 250,
    stock: 5,
  });

  const agregarAlCarrito = (cantidad) => {
    /*console.log("Se agrego al carrito");
    console.log(product);
    console.log({ cantidad });*/
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
