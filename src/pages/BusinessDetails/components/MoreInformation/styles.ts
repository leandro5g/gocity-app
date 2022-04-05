import styled from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(18)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-top: ${({ theme }) => theme.metrics.RFValue(18)}px;
`;

export const Desc = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(12)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.secondary_400};
`;
