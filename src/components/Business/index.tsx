import React from "react";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  ContainerImage,
  Image,
  Content,
  Name,
  Desc,
  Footer,
  Group,
} from "./styles";

const Business: React.FC = () => {
  const { colors, metrics } = useTheme();

  return (
    <Container>
      <ContainerImage>
        <Image
          resizeMode="cover"
          source={{
            uri: "https://pesweb.azureedge.net/spimg/restaurantphotos/5-star-hotel-porto-restaurant-details-new.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=775&h=530&mode=crop",
          }}
        />
      </ContainerImage>

      <Content>
        <Name>Restaurante boa vida</Name>
        <Desc numberOfLines={1}>Restaurente * 2km</Desc>

        <Footer>
          <Group>
            <MaterialIcons
              color={colors.secondary}
              size={metrics.RFValue(16)}
              name="star"
            />
            <Desc>5,0</Desc>
          </Group>
        </Footer>
      </Content>
    </Container>
  );
};

export { Business };
