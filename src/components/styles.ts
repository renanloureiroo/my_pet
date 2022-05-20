import styled from "styled-components/native";

export const Container = styled.View`
  height: 50px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  color: #000000;
`;
