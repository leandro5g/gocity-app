import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(150)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View``;
export const TitleContainer = styled.View``;
export const Title = styled.Text``;
export const Description = styled.Text``;
