import React from "react";
import { FoodItem } from "../../../../components/FoodItem";

import { Container, Title, List } from "./styles";

const ListFood: React.FC = () => {
  return (
    <Container>
      <Title>Pratos</Title>

      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />

      <Title>Bebidas</Title>

      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
      <FoodItem />
    </Container>
  );
};

export { ListFood };
