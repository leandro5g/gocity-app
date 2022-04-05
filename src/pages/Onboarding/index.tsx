import React from "react";

import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";

import { Container, Title, Header } from "./styles";

const Onboarding: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Uma verdadeira experiência na cidade.</Title>
      <ButtonPrimary icon="login" textButton="Entrar no GoCity" />
    </Container>
  );
};

export { Onboarding };
