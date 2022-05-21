import React from "react";
import { CircleButton } from "../../components/CircleButton";
import DogPhoto from "../../assets/welcome_pet.png";

import { Container, Content, Header, Photo, Subtitle, Title } from "./styles";

export const Welcome = () => {
  return (
    <Container>
      <Header>
        <Photo source={DogPhoto} resizeMethod="resize" />
      </Header>

      <Content>
        <Title>Encontre aqui{"\n"}o Pet dos seus sonhos </Title>

        <Subtitle>
          Ajudamos pessoas a encontrarem animais de estimação e ajudamos os
          animais a terem um lar melhor.
        </Subtitle>

        <CircleButton />
      </Content>
    </Container>
  );
};
