import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import styled, { css } from "styled-components/native";

export const Container = styled(BorderlessButton)`
  border-radius: 9999px;
  height: ${RFValue(66)}px;
  width: ${RFValue(66)}px;
`;
