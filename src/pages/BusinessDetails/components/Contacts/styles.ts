import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(18)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-top: ${({ theme }) => theme.metrics.RFValue(18)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.metrics.RFValue(5)}px;
`;

export const Button = styled.View`
  margin-right: ${({ theme }) => theme.metrics.RFValue(20)}px;
`;
