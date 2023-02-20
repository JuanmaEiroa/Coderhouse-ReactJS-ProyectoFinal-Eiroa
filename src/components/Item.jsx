import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

const Item = ({ id, name, category, image, stock }) => {
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
          <p><b>Categoría:</b> {category}</p>
          <p><b>Stock:</b> {stock}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link to={`/item/${id}`}>
            <button>Ver detalles</button>
          </Link>
        </CardFooter>
      </Card>
      </div>
    </>
  );
};

export default Item;
