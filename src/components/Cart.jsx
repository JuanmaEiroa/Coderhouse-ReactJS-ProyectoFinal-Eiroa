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
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext } from "react";

const Cart = () => {
  const { cart, resetCart, handleRemoveItem } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <Container maxW="4xl" className="cartContainer">
        <Heading className="cartTitle">Carrito</Heading>
        <Container className="cartItemList">
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "lightblue", color: "white" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    item1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className="itemExpanded">
                item1img - item1name - item1price
                <br />
                <Center>
                  <Button colorScheme={"red"} onClick={handleRemoveItem}>Eliminar</Button>
                </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
        <Button colorScheme={"red"} onClick={resetCart}>Vaciar Carrito</Button>
        <Button colorScheme={"green"}>Finalizar Compra</Button>
      </Container>
    </>
  );
};

export default Cart;
