import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito, stock }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>

      <CounterContainer agregarAlCarrito={agregarAlCarrito} stock={stock} />
    </div>
  );
};

export default ItemDetail;
