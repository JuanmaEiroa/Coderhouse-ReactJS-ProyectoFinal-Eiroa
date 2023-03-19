import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Container,
  Heading,
  Center,
  InputLeftElement,
  Icon,
  InputGroup,
  FormHelperText,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { MdPermIdentity, MdPhone, MdOutlineHome } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const BuyerForm = () => {
  const {handleFinishBuy} = useContext(CartContext);

  return (
    <>
      <Container className="buyerForm">
        <Center>
          <Heading size="md" className="formTitle">
            Complete el siguiente formulario con sus datos:
          </Heading>
        </Center>
        <FormControl isRequired>
          <FormLabel htmlFor="userName">Nombre y Apellido:</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon boxSize={5} as={MdPermIdentity} />}
            />
            <Input
              className="formInput"
              placeholder="Nombre y apellido"
              id="userName"
            />
          </InputGroup>
          <FormLabel htmlFor="userEmail">E-mail:</FormLabel>
          <InputGroup>
            <InputLeftElement children="@" />
            <Input
              className="formInput"
              placeholder="E-mail"
              id="userEmail"
              type="email"
            />
          </InputGroup>
          <FormLabel htmlFor="userAddress">Dirección:</FormLabel>
          <InputGroup>
            <InputLeftElement
              children={<Icon boxSize={5} as={MdOutlineHome} />}
            />
            <Input
              className="formInput"
              placeholder="Dirección"
              id="userAddress"
            />
          </InputGroup>
          <FormLabel htmlFor="userPhone">Teléfono/Celular:</FormLabel>
          <InputGroup>
            <InputLeftElement children={<Icon boxSize={5} as={MdPhone} />} />
            <Input
              className="formInput"
              placeholder="Teléfono/Celular"
              id="userPhone"
              type="number"
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="addInfo">Ingrese lo que quiera comunicarle al vendedor:</FormLabel>
          <Textarea placeholder="Quiero avisarle al vendedor acerca de..." id="addInfo"></Textarea>
          <FormHelperText className="formFooter">
            Los campos con un * son obligatorios
          </FormHelperText>
        </FormControl>
        <Button colorScheme={"green"} onClick={handleFinishBuy}>Enviar Datos</Button>
      </Container>
    </>
  );
};

export default BuyerForm;
