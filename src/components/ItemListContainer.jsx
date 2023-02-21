import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Data from "../productList.json";
import { Container, Grid, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(Data);
        const productsList = await response.json();
        setProducts(productsList);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [category]);

  const getProductByCategory = Data.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Container className="productsTitle" centerContent>
        <Heading>Nuestros Productos</Heading>
      </Container>
      <div className="productListContainer">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {category ? (
            <ItemList products={getProductByCategory} />
          ) : (
            <ItemList products={Data} />
          )}
        </Grid>
      </div>
    </>
  );
};

export default ItemListContainer;
