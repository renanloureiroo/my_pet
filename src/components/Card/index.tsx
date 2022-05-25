import React from "react";

import { Container, Footer, Name, Photo } from "./styles";

type CardItem = {
  id: string;
  name: string;
  url: string;
};

type CardProps = {
  data: CardItem;
};

export const Card = ({ data }: CardProps) => {
  return (
    <Container>
      <Photo source={{ uri: data.url }} />
      <Footer>
        <Name>{data.name}</Name>
      </Footer>
    </Container>
  );
};
