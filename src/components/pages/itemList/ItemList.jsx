import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductCard from "../../common/productCard/ProductCard";
import { Link } from "react-router-dom";
import "../itemList/ItemList.css";
const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4];

  return (
    <section
      style={{ display: "flex", padding: "10px", backgroundColor: "#EEEEEE" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {items.length > 0
          ? items.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })
          : arr.map((elemento) => (
              <Stack spacing={1} key={elemento}>
                <Skeleton variant="rectangular" width={237.5} height={393.5} />
              </Stack>
            ))}
      </div>
    </section>
  );
};
export default ItemList;
