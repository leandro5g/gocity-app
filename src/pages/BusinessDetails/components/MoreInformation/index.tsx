import React from "react";

import { Container, Title, Desc } from "./styles";

const MoreInformation: React.FC = () => {
  return (
    <Container>
      <Title>Sobre nós</Title>
      <Desc>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </Desc>

      <Title>Endereço</Title>
      <Desc>Avenida Dom Luiz do amaral, 399, Vila ciena - Brodowski</Desc>
    </Container>
  );
};

export { MoreInformation };
