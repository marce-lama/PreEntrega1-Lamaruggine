import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductCard from "../../common/productCard/ProductCard";
import { Link } from "react-router-dom";

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
              <Typography>Categoria</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormGroup style={{ alignContent: "center" }}>
                  <Link to="/">
                    <FormControlLabel
                      style={{ color: "black" }}
                      control={<Checkbox />}
                      label="Todas"
                    />
                  </Link>
                  <Link to="/category/Urbanas">
                    <FormControlLabel
                      style={{ color: "black" }}
                      control={<Checkbox />}
                      label="Urbanas"
                    />
                  </Link>
                  <Link to="/category/Deportivas">
                    <FormControlLabel
                      style={{ color: "black" }}
                      control={<Checkbox />}
                      label="Deportivas"
                    />
                  </Link>
                </FormGroup>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Marca</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <FormGroup style={{ alignContent: "center" }}>
                  <FormControlLabel control={<Checkbox />} label="Adidas" />
                  <FormControlLabel control={<Checkbox />} label="Asics" />
                  <FormControlLabel control={<Checkbox />} label="Jordan" />
                  <FormControlLabel control={<Checkbox />} label="Nike" />
                </FormGroup>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Talle</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Precio</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
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
