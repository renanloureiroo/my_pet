import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight()}px;
`;

export const VoidBox = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;
