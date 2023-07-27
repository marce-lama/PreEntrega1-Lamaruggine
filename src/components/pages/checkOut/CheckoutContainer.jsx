import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log(userData);
  };

  const funcionDeLosInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <Checkout
      funcionDelFormulario={funcionDelFormulario}
      funcionDeLosInput={funcionDeLosInput}
    />
  );
};

export default CheckoutContainer;
