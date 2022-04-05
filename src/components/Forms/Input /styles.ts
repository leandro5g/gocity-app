import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface FocusProps {
  isFocus: boolean;
}

export const Container = styled.View<FocusProps>`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(58)}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${RFValue(15)}px;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border-width: ${RFValue(1)}px;
      border-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const Content = styled.View`
  width: ${({ theme }) => theme.metrics.RFValue(46)}px;
  align-items: center;
  border-right-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.grayDark};
`;

export const InputForm = styled(TextInput)`
  flex: 1;
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
  padding-left: ${RFValue(15)}px;
`;
