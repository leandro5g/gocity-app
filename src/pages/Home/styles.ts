import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const List = styled.ScrollView`
  margin-top: ${({ theme }) => theme.metrics.RFValue(45)}px;
`;
