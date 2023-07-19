import CounterContainer from "../../common/counter/CounterContainer";
import "../itemDetail/ItemDetail.css";

const ItemDetail = ({ product, agregarAlCarrito, stock }) => {
  return (
    <div>
      <h1 className="model">{product.title}</h1>
      <img className="imageProduct" src={`${product.img}`} alt="" />
      <h3 className="price">{product.price}</h3>

      <CounterContainer agregarAlCarrito={agregarAlCarrito} stock={stock} />
    </div>
  );
};

export default ItemDetail;
