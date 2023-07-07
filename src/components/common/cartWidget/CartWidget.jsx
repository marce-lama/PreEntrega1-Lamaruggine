import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={2} color="primary">
          <ShoppingCartIcon color="inherit" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
