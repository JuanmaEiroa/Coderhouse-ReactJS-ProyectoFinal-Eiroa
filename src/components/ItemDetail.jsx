import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const productFilter = products.filter((product) => product.id == id);

  return (
    <>
      {productFilter.map((product) => (
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
