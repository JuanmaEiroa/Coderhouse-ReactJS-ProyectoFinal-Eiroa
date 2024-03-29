import {
  Container,
  Heading,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Center,
  Badge,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext } from "react";
import OrderForm from "./OrderForm";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, resetCart, handleRemoveItem, total, showForm, handleShowForm } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <Container className="emptyCart">
          <Center>
            <Heading className="cartTitle">El carrito está vacío</Heading>
          </Center>
          <Center>
            <Link to={"/catalog"}>Ir al catálogo de productos</Link>
          </Center>
        </Container>
      ) : (
        <Container maxW="4xl" className="cartContainer">
          <Heading className="cartTitle">Mi Carrito</Heading>
          <Container className="cartItemList">
            <Accordion allowMultiple>
              {cart.map((prod) => (
                <AccordionItem key={prod.item.id}>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: "lightblue", color: "white" }}
                      className="cartItem"
                    >
                      <Box as="span" flex="1" textAlign="left">
                        <Badge fontSize="1.1em" className="cartQuantity">
                          {prod.quantity}
                        </Badge>{" "}
                        {prod.item.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="itemExpanded">
                    <Badge fontSize="1.1em" className="cartQuantity">
                      {prod.quantity}
                    </Badge>{" "}
                    {prod.item.name} - Precio Unitario: ${prod.item.price} -
                    Subtotal: ${prod.item.price * prod.quantity}
                    <br />
                    <Center>
                      <Button
                        colorScheme={"red"}
                        onClick={() => {
                          handleRemoveItem(prod.item.id);
                        }}
                      >
                        Eliminar
                      </Button>
                    </Center>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
          <Box w="30%" p={2} className="cartTotal">
            <u>Total de su compra:</u> ${total}
          </Box>
          <Divider className="cartDivider" />
          <Center>
          <Flex w="40%">
            <Button colorScheme={"red"} onClick={resetCart}>
              Vaciar Carrito
            </Button>
            <Spacer />
            <Button colorScheme={"green"} onClick={handleShowForm}>
              Finalizar Compra
            </Button>
          </Flex>
          </Center>
        </Container>
      )}
      {showForm && <OrderForm />}
    </>
  );
};

export default Cart;
