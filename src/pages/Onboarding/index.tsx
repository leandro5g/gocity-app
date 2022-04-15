import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { LogoSimple } from "../../components/Logos/LogoSimple";

import { Container, Title } from "./styles";

const Onboarding: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate("SignIn" as never);
  }, []);

  return (
    <Container>
      <LogoSimple />
      <Title>Uma verdadeira experiência na cidade.</Title>
      <ButtonPrimary
        onPress={handleNavigate}
        icon="login"
        textButton="Entrar no GoCity"
      />
    </Container>
  );
};

export { Onboarding };
