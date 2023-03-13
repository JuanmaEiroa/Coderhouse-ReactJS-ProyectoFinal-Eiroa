import React from "react";
import { Grid, Center, Button, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { CounterContext } from "../context/counterContext";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({productStock}) => {
  const {counter, upCounter, downCounter} = useContext(CounterContext);

  const plusItem = () => {
    counter < productStock ? upCounter() : counter;
  };

  const minusItem = () => {
    counter > 0 ? downCounter() : counter;
  };

  const addToCart = () => {
    console.log("Item añadido al carrito");
    setCart ((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map ((item) => {
          if (item.id ===id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, {id, quantity: count, price, name }];
      }
    });
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
            <Button w="100%" colorScheme="yellow" className="itemCountBtn" onClick={minusItem}>
            <span className="itemCountSymbol">-</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem className="itemCounter">
            {counter}
        </GridItem>
        <GridItem>
          <Center>
            <Button w="100%" colorScheme="yellow" onClick={plusItem}>
              <span className="itemCountSymbol">+</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Button w="100%" colorScheme="green" className="addToCartBtn" onClick={addToCart}>Añadir al carrito</Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default ItemCount;
