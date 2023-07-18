const Checkout = ({ funcionDelFormulario, funcionDeLosInput }) => {
  return (
    <div>
      <h1>CheckOut</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={funcionDeLosInput}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="lastName"
          onChange={funcionDeLosInput}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
