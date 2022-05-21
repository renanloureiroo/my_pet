import React from "react";
import { Avatar } from "../../components/Avatar";

import { Container, Header } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Avatar url="https://github.com/renanloureiroo.png" />
      </Header>
    </Container>
  );
};
