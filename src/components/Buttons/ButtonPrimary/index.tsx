import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Content, ContentIcon, TextButton } from "./styles";

interface ButtonPrimaryProps {
  textButton: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ textButton, icon }) => {
  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.9}>
      <Content>
        <TextButton>{textButton}</TextButton>
      </Content>

      <ContentIcon>
        <MaterialCommunityIcons
          color={colors.primaryDark}
          size={RFValue(22)}
          name={icon}
        />
      </ContentIcon>
    </Container>
  );
};

export { ButtonPrimary };
