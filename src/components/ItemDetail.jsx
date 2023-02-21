import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Card, CardHeader, CardBody, Divider, CardFooter } from "@chakra-ui/react";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const productFind = products.find((product) => product.id == id);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Card>
            <CardHeader>{product.name}</CardHeader>
            <CardBody>
              <img src={product.image} alt="Item image"></img>
              <br />
              <p>{product.description}</p>
              <p><b>Precio:</b> ${product.price}</p>
              <p><b>Stock:</b> {product.stock}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <ItemCount />
              <br />
              <button>Añadir a carrito</button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
