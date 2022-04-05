import React from "react";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Value, Content, Quantity } from "./styles";

const Evaluation: React.FC = () => {
  const { metrics, colors } = useTheme();

  return (
    <Container>
      <Value>4,60</Value>
      <Content>
        <MaterialIcons
          color={colors.secondary}
          name="star"
          size={metrics.RFValue(19)}
        />
        <MaterialIcons
          color={colors.secondary}
          name="star"
          size={metrics.RFValue(19)}
        />
        <MaterialIcons
          color={colors.secondary}
          name="star"
          size={metrics.RFValue(19)}
        />
        <MaterialIcons
          color={colors.secondary}
          name="star"
          size={metrics.RFValue(19)}
        />
        <MaterialIcons
          color={colors.secondary}
          name="star"
          size={metrics.RFValue(19)}
        />
      </Content>
      <Quantity>(2808 Avaliações)</Quantity>
    </Container>
  );
};

export { Evaluation };
