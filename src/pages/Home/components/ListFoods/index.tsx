import React from "react";
import { Food } from "../../../../components/Food";

import { Container, Title, List } from "./styles";

const ListFoods: React.FC = () => {
  return (
    <Container>
      <List showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 6].map((food) => (
          <Food key={String(food)} />
        ))}
      </List>
    </Container>
  );
};

export { ListFoods };
