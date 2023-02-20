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
        <Menu>
          <MenuButton className="menuButton">
            Productos <span className="chevron">v</span>
          </MenuButton>
          <MenuList className="productMenu">
            <MenuItem className="productMenuItem">Sillas de Ruedas</MenuItem>
            <MenuItem className="productMenuItem">Andadores</MenuItem>
            <MenuItem className="productMenuItem">
              Muñequeras/Rodilleras
            </MenuItem>
            <MenuItem className="productMenuItem">Collares</MenuItem>
            <MenuItem className="productMenuItem">
              Suplementos Deportivos
            </MenuItem>
          </MenuList>
        </Menu>
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
