const Checkout = ({ handleSubmit, handleChange, orderId }) => {
  return (
    <div>
      <h1>CheckOut</h1>
      {orderId ? (
        <h3>Su orden de compra es: {orderId}</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
