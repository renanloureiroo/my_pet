import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  border-radius: ${RFValue(10)}px;

  overflow: hidden;
  position: relative;
`;

export const Photo = styled.Image`
  flex: 1;
`;

export const Footer = styled.View`
  z-index: 1;
  position: absolute;

  min-height: 100px;
  bottom: 0;
  padding: 0 ${RFValue(20)}px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
`;
