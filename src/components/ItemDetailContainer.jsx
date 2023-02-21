import React from "react";
import ItemDetail from "./ItemDetail";
import Data from "../productList.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  const productFind = Data.find((product) => product.id == id);

  useEffect(() => {
    async function getProductsList() {
      try {
        const response = await fetch(Data);
        const productList = await response.json();
        setProducts(productList);
      } catch (error) {
        console.log(error);
      }
    }
    getProductsList();
  }, [id]);



  return (
    <>
      <ItemDetail products={productList} />
    </>
  );
};

export default ItemDetailContainer;
