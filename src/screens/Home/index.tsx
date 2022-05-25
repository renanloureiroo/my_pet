import React from "react";
import { Avatar } from "../../components/Avatar";
import LogoSVG from "../../assets/logo1.svg";

import { Container, Header, VoidBox } from "./styles";
import { View } from "react-native";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Avatar url="https://github.com/renanloureiroo.png" />
        <LogoSVG width={50} height={50} />
        <VoidBox />
      </Header>
    </Container>
  );
};
