import React from "react";
import ItemDetail from "./ItemDetail";
import Data from "../productList.json";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

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
  }, []);

  const productFilter = Data.filter((product) => product.id == id);

  return (
    <>
      <ItemDetail products={Data} />
    </>
  );
};

export default ItemDetailContainer;
