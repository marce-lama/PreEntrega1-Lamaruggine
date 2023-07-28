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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "#606C5D",
            fontFamily: "fantasy",
            fontSize: 15,
            marginRight: 10,
          }}
          variant="contained"
          onClick={restar}
        >
          -
        </Button>
        <h4 style={{ fontFamily: "fantasy", marginRight: 10 }}>{counter}</h4>
        <Button
          style={{
            backgroundColor: "#606C5D",
            fontFamily: "fantasy",
            fontSize: 15,
            marginRight: 10,
          }}
          /*disabled={counter < stock ? false : true}*/ // Esta es una opcion
          disabled={counter >= stock} // Esta es otra opcion
          variant="contained"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button
          style={{ marginTop: 20, fontFamily: "fantasy" }}
          variant="contained"
          color="secondary"
          onClick={() => agregarAlCarrito(counter)}
        >
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default Counter;
