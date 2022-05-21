import React from "react";

import { Container } from "./styles";

interface AvatarProps {
  url: string;
}

export const Avatar = ({ url }: AvatarProps) => {
  return <Container source={{ uri: url }}></Container>;
};
