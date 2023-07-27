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
      <div style={{ maxWidth: "250px" }}>
        <div
          className="containerAccordion"
          style={{ marginTop: "30px", width: "237.5px" }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily: "fantasy", color: "#606C5D" }}>
                Categoria
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <nav aria-label="secondary mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "black",
                            marginTop: -20,
                          }}
                          to="/"
                        >
                          <ListItemButton>
                            <ListItemText primary="Todas" />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                      <ListItem disablePadding>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/category/Urbanas"
                        >
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Urbanas" />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                      <ListItem disablePadding>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/category/Deportivas"
                        >
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Deportivas" />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    </List>
                  </nav>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily: "fantasy", color: "#606C5D" }}>
                Marca
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <nav aria-label="secondary mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton style={{ marginTop: -20 }}>
                          <ListItemText primary="Adidas" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary="Nike" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary="Jordan" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                          <ListItemText primary="Asics" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </nav>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
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
