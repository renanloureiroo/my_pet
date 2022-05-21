import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
export const Container = styled.View`
  flex: 1;

  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  height: ${RFPercentage(50)}px;
  padding: 0 ${RFValue(20)}px;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Photo = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(320)}px;
`;

export const Content = styled.View`
  height: ${RFPercentage(50)}px;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px;
  padding-bottom: ${getBottomSpace()}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(36)}px;
  line-height: ${RFValue(46)}px;
  text-align: center;
  margin-bottom: ${RFValue(16)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  text-align: center;
  margin-bottom: ${RFValue(36)}px;
`;
