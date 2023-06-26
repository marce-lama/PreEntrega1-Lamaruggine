const ItemList = ({ contador, setContador }) => {
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar Contador
      </button>
    </div>
  );
};

export default ItemList;
