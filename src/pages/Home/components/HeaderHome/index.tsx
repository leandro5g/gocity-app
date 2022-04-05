import React from "react";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";
import LogoSvg from "../../../../assets/svg/logo.svg";

import { InputFilter } from "../../../../components/Forms/InputFilter";

import {
  Container,
  Content,
  TitleContainer,
  Title,
  Description,
  Button,
  ContentInfo,
  Footer,
} from "./styles";

const HeaderHome: React.FC = () => {
  const { colors, metrics } = useTheme();

  return (
    <Container>
      <Content>
        <ContentInfo>
          <LogoSvg />
          <TitleContainer>
            <Title>GoCity</Title>
            <Description>Os melhores da cidade</Description>
          </TitleContainer>
        </ContentInfo>

        <Button>
          <MaterialIcons
            name="logout"
            size={metrics.RFValue(24)}
            color={colors.secondary}
          />
        </Button>
      </Content>

      <Footer>
        <InputFilter placeholder="Qual comida você procura?" />
      </Footer>
    </Container>
  );
};

export { HeaderHome };
