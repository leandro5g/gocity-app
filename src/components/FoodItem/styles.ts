import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;
  justify-content: center;
  padding-left: ${({ theme }) => theme.metrics.RFValue(16)}px;
  margin-bottom: ${({ theme }) => theme.metrics.RFValue(10)}px;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;
