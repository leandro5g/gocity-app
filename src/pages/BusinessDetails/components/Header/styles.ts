import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.RFValue(150)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.metrics.RFValue(30)}px
    ${({ theme }) => theme.metrics.RFValue(24)}px 0px;
`;

export const HeaderButton = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Logo = styled.Image`
  width: ${({ theme }) => theme.metrics.RFValue(60)}px;
  height: ${({ theme }) => theme.metrics.RFValue(65)}px;
  border-radius: 10px;
`;

export const ContainerInfo = styled.View`
  margin-left: ${RFValue(6)}px;
  flex: 1;
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  width: 70%;
`;

export const Desc = styled.Text`
  font-size: ${({ theme }) => theme.metrics.RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
`;
