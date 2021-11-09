import React from "react";

import LogoSvg from "../../assets/svg/logo.svg";

import {
  Container,
  Content,
  TitleContainer,
  Title,
  Description,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>GoCity</Title>
          <Description>Os melhores comércios da sua cidade</Description>
        </TitleContainer>
      </Content>
    </Container>
  );
};

export { Header };
