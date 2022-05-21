import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.Image`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  border-radius: 9999px;

  background: ${({ theme }) => theme.colors.primary_500};
`;
