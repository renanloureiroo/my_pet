import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight } from "phosphor-react-native";
import React from "react";
import { View } from "react-native";
import {
  BorderlessButtonProps,
  RectButtonProps,
} from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface CircleButtonProps extends BorderlessButtonProps {
  colors: string[];
}

export const CircleButton = ({ colors, ...rest }: CircleButtonProps) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <LinearGradient
        colors={colors}
        start={{ x: 0.9, y: 0.1 }}
        end={{ x: 0.1, y: 0.9 }}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 9999,
          height: "100%",
          width: "100%",
        }}
      >
        <ArrowRight size={36} color="#fff" weight="bold" />
      </LinearGradient>
    </Container>
  );
};
