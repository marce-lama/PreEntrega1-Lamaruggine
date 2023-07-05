import { useEffect, useState } from "react";
import { customAxios } from "./axiosInstance";
import { products } from "./productMock";
import { FireTruck } from "@mui/icons-material";

const ProbandoJsonServer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let data = axios.get("http://localhost:5000/products");

    data.then((res) => setItems(res.data)).catch((error) => console.log(error));
  }, []);

  //POST ------> CREAR UN NUEVO REGISTRO DENTRO DE MI BASE DE DATOS

  let nuevoItem = {
    title: "Nuevas Zapatillas",
    marca: "Nike",
    price: 83999,
    stock: 10,
    description:
      "Las Zapatillas Running Nike React Infinity Run Fk 3 Hombre son un calzado deportivo diseñado para ofrecer una gran comodidad y rendimiento en carrera.",
    category: "Deportivas",
    img: "https://res.cloudinary.com/dhdhzwlz9/image/upload/v1688396313/Proyecto%20React%20Js/Nike%20Deportivas/Zapatillas%20Nike%20React%20Infinity%20Run%20Flyknit%203.jpg",
  };
  const createItem = () => {
    // let data = fetch("http://localhost:5000/products",{
    //     method:"POST"
    //     body: JSON.stringify(nuevoItem),
    // })
    let data = customAxios.post("/", nuevoItem);
  };

  const updateItem = (id) => {
    let nuevaInfo = {
      price: 5000,
      stock: 10,
    };
    let data = customAxios.put(`/${id}`, nuevaInfo);
  };

  const deleteById = (id) => {
    let data = customAxios.delete(`/${id}`);
  };

  console.log(items);

  return (
    <div>
      <h1>Probando</h1>

      <button onClick={createItem}>Crear Iterm</button>

      <button onClick={() => updateItem(5)}>Modificar Item</button>

      <button onClick={() => deleteById(25)}>Eleminar Item</button>
    </div>
  );
};

export default ProbandoJsonServer;
