import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);

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

      <button onClick={clearCart}>LimpiarCarrito</button>
    </div>
  );
};

export default CartContainer;
