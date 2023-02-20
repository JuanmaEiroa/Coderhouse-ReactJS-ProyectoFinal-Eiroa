import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

const Item = () => {
  return (
    <>
      <Card>
        <CardHeader>Silla de Ruedas</CardHeader>
        <CardBody>
          <img alt="Silla de Ruedas"></img>
          <p>Precio: $2550</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <button>Ver detalles</button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
