import { Button } from "@mui/material";
import { products } from "../../productMock";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
  const rellenar = () => {
    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    });
  };

  return (
    <div style={{ padding: 10, margin: 20 }}>
      <h1 style={{ fontFamily: "fantasy", color: "#606c5d", marginBottom: 20 }}>
        Ruta para el Administrador
      </h1>
      <Button
        style={{ backgroundColor: "#9336b4" }}
        variant="contained"
        onClick={rellenar}
      >
        Rellenar base de datos
      </Button>
    </div>
  );
};

export default Dashboard;
