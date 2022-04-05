import React from "react";
import { Business } from "../../../../components/Business";

import { Container, Title, List } from "./styles";

const ListBusiness: React.FC = () => {
  return (
    <Container>
      <List showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 6].map((food) => (
          <Business key={String(food)} />
        ))}
      </List>
    </Container>
  );
};

export { ListBusiness };
