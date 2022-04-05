import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Content, InputForm } from "./styles";

interface InputFilterProps extends TextInputProps {}

const InputFilter: React.FC<InputFilterProps> = ({ ...rest }) => {
  const { colors, metrics } = useTheme();

  return (
    <Container>
      <Content>
        <MaterialIcons
          name="search"
          color={colors.grayDark}
          size={metrics.RFValue(26)}
        />
      </Content>

      <InputForm placeholderTextColor={colors.grayDark} {...rest} />
    </Container>
  );
};

export { InputFilter };
