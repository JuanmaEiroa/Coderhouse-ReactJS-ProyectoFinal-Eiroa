import React from "react";
import { useState } from "react";
import { Grid, Center, Button, GridItem } from "@chakra-ui/react";

const ItemCount = ({productStock}) => {
  const [itemCounter, setItemCounter] = useState(0);

  const plusItem = () => {
    itemCounter < productStock ? setItemCounter(itemCounter + 1) : itemCounter;
  };

  const minusItem = () => {
    itemCounter > 0 ? setItemCounter(itemCounter - 1) : itemCounter;
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
            {itemCounter}
        </GridItem>
        <GridItem>
          <Center>
            <Button w="100%" colorScheme="yellow" onClick={plusItem}>
              <span className="itemCountSymbol">+</span>
            </Button>
          </Center>
        </GridItem>
        <GridItem colSpan={3}>
          <Button w="100%" colorScheme="green" className="addToCartBtn">Añadir al carrito</Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default ItemCount;
