import React, { useCallback, useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Content, InputForm } from "./styles";

interface InputProps extends TextInputProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  const { colors, metrics } = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container isFocus={isFocus}>
      <Content>
        <MaterialCommunityIcons
          name={icon}
          color={isFocus ? colors.primary : colors.grayDark}
          size={metrics.RFValue(20)}
        />
      </Content>

      <InputForm
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={colors.grayDark}
        {...rest}
      />
    </Container>
  );
};

export { Input };
