import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  line-height: ${RFValue(22.5)}px;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ContentIcon = styled.View`
  width: ${RFValue(56)}px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-top-right-radius: ${RFValue(8)}px;
  border-bottom-right-radius: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator``;
