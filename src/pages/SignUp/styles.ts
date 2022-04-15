import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(60)}px ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
`;

export const Content = styled.View`
  justify-content: center;
  margin-bottom: ${RFPercentage(4)}px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
  line-height: ${({ theme }) => theme.metrics.RFValue(20)}px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  margin-left: ${RFValue(7)}px;
`;

export const ContentDescription = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin: ${RFPercentage(4)}px 0px;
`;
