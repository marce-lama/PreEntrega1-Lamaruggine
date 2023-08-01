import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title:
        "¿Estás seguro de que querés eliminar todos los productos del carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Vaciar",
      denyButtonText: `No Vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito se ha vaciado con exito!", "", "success");
      } else if (result.isDenied) {
        Swal.fire(
          "El carrito aun tiene los podructos seleccionados",
          "",
          "info"
        );
      }
    });
  };

  let totalPrice = getTotalPrice();

  return (
    <div>
      {cart.length === 0 && (
        <h1 className="textCart">El carrito aun no contiene productos ☹ </h1>
      )}

      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h4>{elemento.title}</h4>
            <h4>{elemento.price}</h4>
            <h4>{elemento.quantity}</h4>
            <Button variant="contained" onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          {" "}
          <Button variant="contained" onClick={limpiar}>
            Limpiar Carrito
          </Button>
          <Link to="/checkout">
            <Button variant="contained">Terminar Compra</Button>
          </Link>
        </>
      )}
      {cart.length > 0 && <h4>El total a pagar es: ${totalPrice}</h4>}
    </div>
  );
};

export default CartContainer;
