import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <div>
      <Link to="/cart" style={{ color: "white" }}>
        <Badge badgeContent={total} color="primary">
          <ShoppingCartIcon color="inherit" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
