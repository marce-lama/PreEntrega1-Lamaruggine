import CounterContainer from "../../common/counter/CounterContainer";
import "../itemDetail/ItemDetail.css";

const ItemDetail = ({
  product,
  agregarAlCarrito,
  stock,
  cantidadEnCarrito,
}) => {
  return (
    <>
      <div className="detailContainer">
        <div className="imgProductContainer">
          <img className="imageProduct" src={`${product.img}`} alt="" />
        </div>
        <div>
          <h1 className="model">{product.title}</h1>
          <h4 className="marca">{product.marca}</h4>
          <h3 className="price">${product.price}</h3>
          <CounterContainer
            agregarAlCarrito={agregarAlCarrito}
            stock={stock}
            cantidadEnCarrito={cantidadEnCarrito}
          />
        </div>
      </div>
      <div>
        <p className="description">{product.description}</p>
      </div>
    </>
  );
};

export default ItemDetail;
