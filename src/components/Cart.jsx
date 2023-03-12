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
import React from "react";

const Cart = () => {
  return (
    <>
      <Container maxW="4xl" centerContent className="cartContainer">
        <Heading className="cartTitle">Carrito</Heading>
        <Container className="cartItemList">
          <Accordion allowMultiple allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "lightblue", color: "white" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Item1
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel centerContent className="itemExpanded">
                Item1 - Image Item1 - Name Item1 - Price
                <br />
                <Center>
                  <Button colorScheme={"red"}>Eliminar</Button>
                </Center>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "lightblue", color: "white" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    Item2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel centerContent className="itemExpanded">
                Item2 - Image Item2 - Name Item2 - Price
                <br />
                <Center>
                  <Button colorScheme={"red"}>Eliminar</Button>
                </Center>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
        <Button colorScheme={"green"}> 
          Finalizar Compra
        </Button>
      </Container>
    </>
  );
};

export default Cart;
