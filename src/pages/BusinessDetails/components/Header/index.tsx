import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import HeaderSvg from "../../../../assets/svg/heart.svg";
import BackSvg from "../../../../assets/svg/back.svg";

import {
  Container,
  HeaderButton,
  Content,
  Logo,
  ContainerInfo,
  Name,
  Desc,
} from "./styles";

const Header: React.FC = () => {
  const { colors, metrics } = useTheme();

  return (
    <Container>
      <HeaderButton>
        <BackSvg width={RFValue(20)} height={RFValue(20)} />
        <HeaderSvg width={RFValue(20)} height={RFValue(20)} />
      </HeaderButton>

      <Content>
        <Logo
          resizeMode="contain"
          source={{
            uri: "https://img.elo7.com.br/product/zoom/2E97A7E/logotipo-personalizada-restaurante-logotipo-restaurante.jpg",
          }}
        />
        <ContainerInfo>
          <Name numberOfLines={1}>Restaurante boa vida</Name>
          <Desc>Restaurantes</Desc>
        </ContainerInfo>
      </Content>
    </Container>
  );
};

export { Header };
