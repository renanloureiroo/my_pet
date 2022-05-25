import React from "react";
import { Avatar } from "../../components/Avatar";
import LogoSVG from "../../assets/logo1.svg";

import { Container, Header, Main, VoidBox } from "./styles";
import { View } from "react-native";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Avatar url="https://github.com/renanloureiroo.png" />
        <LogoSVG width={50} height={50} />
        <VoidBox />
      </Header>
      <Main>
        <Card />
      </Main>
    </Container>
  );
};
