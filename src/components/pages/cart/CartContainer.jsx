import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

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
      /* Read more about isConfirmed, isDenied below */
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
      <h1>Este es el carrito</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h4>{elemento.title}</h4>
            <h4>{elemento.price}</h4>
            <h4>{elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          {" "}
          <button onClick={limpiar}>Limpiar Carrito</button>
          <button>Terminar Compra</button>
        </>
      )}

      <h4>El total a pagar es: {totalPrice}</h4>
    </div>
  );
};

export default CartContainer;
