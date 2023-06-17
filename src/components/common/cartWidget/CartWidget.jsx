import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={2} color="primary">
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </div>
  );
};

export default CartWidget;
