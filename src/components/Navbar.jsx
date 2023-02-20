import React from "react";
import {
  Box,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container maxW="100%" className="navbar">
        <Box>
          <Link to={"/"}>
            <h1 className="brandName">Ortopedia FixSalud</h1>
          </Link>
        </Box>
        <Box>
          <Link to="/"><span>Inicio</span></Link>
        </Box>
        <Menu>
            <MenuButton className="menuButton">
              Productos <span className="chevron">v</span>
            </MenuButton>
          <MenuList className="productMenu">
            <Link to={"/catalog"}>
              <MenuItem className="productMenuItem">Todos los productos</MenuItem>
            </Link>
            <MenuDivider />
            <Link to={`/category/${"wheelchair"}`}>
              <MenuItem className="productMenuItem">Sillas de Ruedas</MenuItem>
            </Link>
            <Link to={`/category/${"walker"}`}>
            <MenuItem className="productMenuItem">Andadores</MenuItem>
            </Link>
            <Link to={`/category/${"collar"}`}>
            <MenuItem className="productMenuItem">Collares</MenuItem>
            </Link>
            <Link to={`/category/${"supplement"}`}>
            <MenuItem className="productMenuItem">
              Suplementos Deportivos
            </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Box>
          <span>Sucursales</span>
        </Box>
        <Box>
          <span>Contacto</span>
        </Box>
        <Box>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
