import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../productCard/ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: "237.5px", height: "393,5px", textAlign: "center" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="maxWidth: 140"
        image={item.img}
      />
      <CardContent>
        <Typography
          sx={{ fontSize: "20px", fontFamily: "fantasy", color: "#606C5D" }}
          gutterBottom
          variant="h4"
          component="div"
        >
          {item.title}
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "bolder" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.marca}
        </Typography>
        <Typography
          sx={{ fontWeight: "bolder", fontFamily: "fantasy", color: "#9336B4" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            sx={{ backgroundColor: "#606C5D", color: "white" }}
            size="small"
            variant="contained"
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
