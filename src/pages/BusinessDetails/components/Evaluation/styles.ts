import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.RFValue(18)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px ${({ theme }) => theme.metrics.RFValue(10)}px;
`;

export const Value = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Quantity = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;
