const ItemListContainer = (props) => {
  const nombre = "CoderHouse";

  return (
    <div>
      <p>{props.saludoA}</p>
      <p>{nombre}</p>
      <p>{props.saludoB}</p>
    </div>
  );
};

export default ItemListContainer;
