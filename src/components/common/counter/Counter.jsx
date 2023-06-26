import { Button } from "@mui/material";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  /*const sumar = () => {
    counter < stock && setCounter(counter + 1);.
  };*/

  const restar = () => {
    counter > 1 && setCounter(counter - 1); // Esta es otra opcion
    // Usar una funcion con un if es otra opcion
    /*if (counter > 1) setCounter(counter - 1);*/
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button variant="contained" onClick={restar}>
          -
        </Button>
        <h4>{counter}</h4>
        <Button
          /*disabled={counter < stock ? false : true}*/ // Esta es una opcion
          disabled={counter >= stock} // Esta es otra opcion
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => agregarAlCarrito(counter)}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default Counter;
