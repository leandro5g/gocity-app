import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Container, Content, ContentIcon, TextButton, Loading } from "./styles";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  textButton: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  isLoading?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  textButton,
  icon,
  isLoading,
  ...rest
}) => {
  const { colors } = useTheme();

  return (
    <Container disabled={isLoading} activeOpacity={0.9} {...rest}>
      <Content>
        {!isLoading && <TextButton>{textButton}</TextButton>}

        {isLoading && (
          <Loading
            color={colors.primaryDark}
            animating={isLoading}
            size="small"
          />
        )}
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
