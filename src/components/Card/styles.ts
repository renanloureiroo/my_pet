import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.primary_400};
  justify-content: flex-end;
`;

export const Footer = styled.View``;

export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
`;
