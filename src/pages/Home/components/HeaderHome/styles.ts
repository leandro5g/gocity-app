import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  padding: ${({ theme }) =>
      theme.metrics.marginTop + theme.metrics.RFValue(30)}px
    ${({ theme }) => theme.metrics.RFValue(24)}px 0px;
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(150)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled(BorderlessButton)``;

export const TitleContainer = styled.View`
  margin-left: ${({ theme }) => theme.metrics.RFValue(15)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(22)}px;
  line-height: ${({ theme }) => theme.metrics.RFValue(28)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_700};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const Footer = styled.View`
  position: absolute;
  width: 100%;
  align-self: center;
  bottom: ${({ theme }) => -theme.metrics.RFValue(28)}px;
`;
