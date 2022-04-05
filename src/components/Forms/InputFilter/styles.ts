import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(58)}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  width: ${({ theme }) => theme.metrics.RFValue(55)}px;
  align-items: center;
`;

export const InputForm = styled(TextInput)`
  flex: 1;
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
`;
