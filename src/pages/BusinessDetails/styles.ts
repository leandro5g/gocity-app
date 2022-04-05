import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  height: 100%;
  border-top-left-radius: ${({ theme }) => theme.metrics.RFValue(30)}px;
  padding: 0px ${({ theme }) => theme.metrics.RFValue(24)}px;
`;
