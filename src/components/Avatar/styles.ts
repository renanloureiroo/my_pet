import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 9999px;

  background: ${({ theme }) => theme.colors.primary_500};
`;
