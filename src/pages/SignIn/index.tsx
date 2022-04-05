import React from "react";

import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { Input } from "../../components/Forms/Input ";
import { KeyboardDismiss } from "../../components/Keyboards/KeyboardDismiss";
import { KeyboardView } from "../../components/Keyboards/KeyboardView";
import { LogoSimple } from "../../components/Logos/LogoSimple";
import { SubTitle } from "../../components/Texts/SubTitle";

import { Container, Content, ContentDescription, Description } from "./styles";

const SignIn: React.FC = () => {
  return (
    <KeyboardView>
      <KeyboardDismiss>
        <Container>
          <LogoSimple />

          <Content>
            <SubTitle>Bem vindo ao GoCity, faça seu login para entrar</SubTitle>

            <Input icon="email" placeholder="Digite seu E-mail" />
            <Input icon="lock" placeholder="Digite sua senha" />
          </Content>

          <ButtonPrimary icon="login" textButton="Fazer Login" />

          <ContentDescription>
            <Description>Não Possui uma conta? Se registre aqui!</Description>
          </ContentDescription>
        </Container>
      </KeyboardDismiss>
    </KeyboardView>
  );
};

export { SignIn };
