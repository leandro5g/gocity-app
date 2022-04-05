import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${({ theme }) =>
      theme.metrics.marginTop + theme.metrics.RFValue(30)}px
    ${({ theme }) => theme.metrics.paddingHorizontal}px 0px;
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(150)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
