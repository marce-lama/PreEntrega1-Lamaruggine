import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../cart/CartContainer.css";
import React from "react";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "¿Estás seguro que querés eliminar el carrito de compras?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Vaciar",
      denyButtonText: `No Vaciar`,
      color: "white",
      background: "#606c5d",
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
      {cart.length === 0 ? (
        <h1 style={{ padding: 10, textAlign: "center" }} className="textCart">
          El carrito aun no contiene productos ☹{" "}
        </h1>
      ) : (
        <div style={{ marginTop: 50, padding: 10 }}>
          <table className="tableContainer">
            <thead className="titleContainer">
              <tr>
                <th></th>
                <th>ID</th>
                <th>MARCA</th>
                <th>MODELO</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th>SUBTOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((elemento) => {
                return (
                  <React.Fragment key={elemento.id}>
                    <tr className="itemListTable">
                      <td>
                        <img
                          className="imagenList"
                          src={`${elemento.img}`}
                          alt=""
                        />
                      </td>
                      <td>{elemento.id}</td>
                      <td>{elemento.marca}</td>
                      <td>{elemento.title}</td>
                      <td>{elemento.quantity}</td>
                      <td>${elemento.price}</td>
                      <td>${elemento.quantity * elemento.price}</td>
                      <td>
                        <Button
                          style={{ backgroundColor: "#9336b4" }}
                          variant="contained"
                          onClick={() => deleteById(elemento.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {cart.length > 0 && (
        <>
          <div style={{ padding: 10 }}>
            {" "}
            <Button
              style={{ backgroundColor: "#9336b4", marginTop: 50 }}
              variant="contained"
              onClick={limpiar}
            >
              Limpiar Carrito
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
            {cart.length > 0 && (
              <h4 style={{ fontFamily: "fantasy", color: "#606c5d" }}>
                El total a pagar es: ${totalPrice}
              </h4>
            )}
            <div style={{ padding: 10 }}>
              <Link to="/checkout">
                <Button
                  style={{ backgroundColor: "#9336b4" }}
                  variant="contained"
                >
                  Terminar Compra
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartContainer;
