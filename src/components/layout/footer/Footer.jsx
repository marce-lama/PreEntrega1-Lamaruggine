import { Box, TextField } from "@mui/material";
import "../footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerContainerSup">
        <div>
          <h3 className="suscription">SUSCRIBITE AL NEWSLESTTER</h3>
        </div>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              style={{ color: "white" }}
              id="outlined-basic"
              label="Ingresá tu E-Mail"
              variant="outlined"
            />{" "}
          </Box>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="footerContainerInf">
        <ul>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Quienes somos</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Preguntas frecuentes</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Sucursales</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Formas de pago</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Términos y condiciones</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Políticas de cambios</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Defensa del consumidor</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Políticas de envíos</li>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <li className="itemListFooter">Retiro en sucursal en 24 hs</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Footer;
