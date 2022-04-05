import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(18)}px;
  color: ${({ theme }) => theme.colors.titles};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-top: ${({ theme }) => theme.metrics.RFValue(18)}px;
`;

export const List = styled.ScrollView`
  flex: 1;
`;
