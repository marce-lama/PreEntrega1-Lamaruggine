import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart" style={{ color: "white" }}>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon color="inherit" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
