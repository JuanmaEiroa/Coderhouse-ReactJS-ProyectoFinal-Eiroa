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
import BuyerForm from "./BuyerForm";


const Cart = () => {
  const { cart, resetCart, handleRemoveItem, total, showForm, handleShowForm } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <Center>
          <Heading className="cartTitle">El carrito está vacío</Heading>
        </Center>
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
                    >
                      <Box as="span" flex="1" textAlign="left">
                        <Badge className="cartQuantity">{prod.quantity}x</Badge>{" "}
                        {prod.item.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="itemExpanded">
                    <Badge className="cartQuantity">{prod.quantity}x</Badge>{" "}
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
          <Box w="30%" p={2} className="cartTotal"><u>Total de su compra:</u> ${total}</Box>
          <Divider className="cartDivider"/>
          <Button colorScheme={"red"} onClick={resetCart}>
            Vaciar Carrito
          </Button>
          <Button colorScheme={"green"} onClick={handleShowForm}>Finalizar Compra</Button>
        </Container>
      )}
      {showForm && <BuyerForm />}
    </>
  );
};

export default Cart;
