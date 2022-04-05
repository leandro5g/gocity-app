import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

interface ActiveProps {
  isSelected: boolean;
}

export const Container = styled.View`
  margin-top: ${({ theme }) => theme.metrics.RFValue(16)}px;
  flex-direction: row;
  align-items: center;
  margin-left: ${({ theme }) => theme.metrics.RFValue(24)}px;
`;

export const Button = styled.TouchableOpacity<ActiveProps>`
  margin-right: ${({ theme }) => theme.metrics.RFValue(8)}px;

  width: ${({ theme }) => theme.metrics.RFValue(130)}px;
  height: ${({ theme }) => theme.metrics.RFValue(30)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.background};
    `}
`;

export const Text = styled.Text<ActiveProps>`
  font-size: ${({ theme }) => theme.metrics.RFValue(18)}px;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: ${({ theme }) => theme.fonts.primary_600};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.colors.titles};
    `}
`;
