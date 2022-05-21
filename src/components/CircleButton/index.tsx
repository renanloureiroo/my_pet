import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight } from "phosphor-react-native";
import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface CircleButtonProps extends RectButtonProps {}

export const CircleButton = ({ ...rest }: CircleButtonProps) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <LinearGradient
        colors={theme.colors.gradient}
        start={{ x: 0.9, y: 0.1 }}
        end={{ x: 0.1, y: 0.9 }}
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 9999,
          height: RFValue(66),
          width: RFValue(66),
        }}
        accessible
        accessibilityRole="button"
      >
        <ArrowRight size={36} color="#fff" weight="bold" />
      </LinearGradient>
    </Container>
  );
};
