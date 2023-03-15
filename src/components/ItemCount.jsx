import React from "react";
import { Grid, Center, Button, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ productStock, product }) => {
  const { counter, upCounter, downCounter, handleAddToCart } = useContext(CartContext);

  const plusItem = () => {
    counter < productStock ? upCounter() : counter;
  };

  const minusItem = () => {
    counter > 0 ? downCounter() : counter;
  };

  return (
    <>
      <Grid
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap="1"
      >
        <GridItem>
          <Center>
            <Button
              w="100%"
              colorScheme="yellow"
              className="itemCountBtn"
              onClick={minusItem}
            >
              <span className="itemCountSymbol">-</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem className="itemCounter">{counter}</GridItem>
        <GridItem>
          <Center>
            <Button w="100%" colorScheme="yellow" onClick={plusItem}>
              <span className="itemCountSymbol">+</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Button
            w="100%"
            colorScheme="green"
            className="addToCartBtn"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default ItemCount;
