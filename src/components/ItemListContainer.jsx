import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Container, Grid, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/src/productList.json");
        const productsList = await response.json();
        category
          ? setProducts(
              productsList.filter((product) => product.category === category)
            )
          : setProducts(productsList);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [category]);

  return (
    <>
      <Container className="productsTitle" centerContent>
        <Heading>Nuestros Productos</Heading>
      </Container>
      <div className="productListContainer">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <ItemList products={products} />
        </Grid>
      </div>
    </>
  );
};

export default ItemListContainer;
