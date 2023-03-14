import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

const Item = ({ id, name, category, image, stock }) => {
  const {resetCounter} = useContext(CartContext);

  return (
    <>
      <div key={id}>
        <Card>
          <CardHeader>
            <span className="itemName">{name}</span>
          </CardHeader>
          <Divider />
          <CardBody>
            <img className="itemImg" src={image} alt="Item image"></img>
            <br />
            <p>
              <b>Categoría:</b> {category}
            </p>
            <p>
              <b>Stock:</b> {stock}
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link to={`/item/${id}`}>
                <Button w="100%" colorScheme="yellow" onClick={resetCounter}>
                  Ver detalles
                </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Item;
