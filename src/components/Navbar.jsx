import React from "react";
import {
  Box,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <Container maxW="100%" className="navbar">
        <Box>
          <h1 className="brandName">Ortopedia FixSalud</h1>
        </Box>
        <Box>
          <a>Inicio</a>
        </Box>
        <Box>
          <a>Productos</a>
        </Box>
        <Box>
          <a>Sucursales</a>
        </Box>
        <Box>
          <a>Contacto</a>
        </Box>
        <Box>
          <CartWidget />
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
