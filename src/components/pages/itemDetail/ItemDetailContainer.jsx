import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
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
    addToCart(data);

    {
      /* Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto Agregado",
      showConfirmButton: false,
      timer: 1500,
      color: "#606C5D",
    });*/
    }

    toast.success("Producto Agregado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        stock={product.stock}
        cantidadEnCarrito={cantidadEnCarrito}
      />
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;
