import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FormFormik = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  let total = getTotalPrice();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
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
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe contener como minimo 5 caracteres")
        .max(15, "Debe contener como maximo 15 caracteres"),
      email: Yup.string()
        .email("Ingrese un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.number("Este campo acepta solo numeros").required(
        "Este campo es obligatorio"
      ),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "40px", alignItems: "center" }}>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            label="Phone"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.phone ? true : false}
            helperText={errors.phone}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </form>
      ) : (
        <h3>Su orden de compra es: {orderId}</h3>
      )}
    </div>
  );
};

export default FormFormik;
