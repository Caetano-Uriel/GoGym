import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/buttonStyle";

export default function GradientButton({
  icon,
  title,
  variant = "default",
  onPress,
}) {
  const gradientColors =
    variant === "default"
      ? ["#fca311", "#ffba08"]
      : variant === "cool"
      ? ["#00c6ff", "#0072ff"]
      : ["#fca311", "#ffba08"]; // fallback

  return (
    <TouchableOpacity style={styles.gradientButtonWrapper} onPress={onPress}>
      <LinearGradient colors={gradientColors} style={styles.gradientButton}>
        {icon}
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
