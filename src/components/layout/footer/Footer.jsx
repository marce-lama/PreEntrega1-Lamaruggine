import { Box, TextField } from "@mui/material";
import "../footer/Footer.css";

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
      <div>
        <h2 className="footerContainerInf">Aca van los enlaces</h2>
      </div>
    </>
  );
};

export default Footer;
