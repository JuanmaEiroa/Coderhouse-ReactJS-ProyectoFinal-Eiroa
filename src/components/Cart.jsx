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
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext } from "react";

const Cart = () => {
  const { cart, resetCart, handleRemoveItem, total } = useContext(CartContext);

  return (
    <>
      <Container maxW="4xl" className="cartContainer">
        <Heading className="cartTitle">Carrito</Heading>
        <Container className="cartItemList">
          <Accordion allowMultiple>
            {cart.map((prod) => (
              <AccordionItem key={prod.item.id}>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "lightblue", color: "white" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      <Badge className="cartQuantity">{prod.quantity}x</Badge> {prod.item.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="itemExpanded">
                  <Badge className="cartQuantity">{prod.quantity}x</Badge> {prod.item.name} - Precio Unitario: ${prod.item.price} - Subtotal: ${prod.item.price*prod.quantity}
                  <br />
                  <Center>
                    <Button colorScheme={"red"} onClick={()=>{handleRemoveItem(prod.item.id)}}>
                      Eliminar
                    </Button>
                  </Center>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
        <Box>Total= ${total}</Box>
        <Divider />
        <Button colorScheme={"red"} onClick={resetCart}>
          Vaciar Carrito
        </Button>
        <Button colorScheme={"green"}>Finalizar Compra</Button>
      </Container>
    </>
  );
};

export default Cart;
