import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="maxWidth: 140"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.marca}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
