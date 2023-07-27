import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(userData);

    let order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    let orderCollections = collection(db, "orders");
    addDoc(orderCollections, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      orderId={orderId}
    />
  );
};

export default CheckoutContainer;
