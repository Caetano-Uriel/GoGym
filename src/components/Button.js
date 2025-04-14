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
      : variant === "blue"
      ? ["#00c6ff", "#0072ff"]
      : variant === "yello"
      ? ["#00c6ff", "#0072ff"]
      : variant === "rosa-alaranjado"
      ? ["#ff5f6d", "#ffc371"] // gradiente rosa-alaranjado suave
      : variant === "rosa"
      ? ["#00c6ff", "#0072ff"]
      :variant === "roxo"
      ? ["#620ea7ce","#620ea7ce" ]
      : ["#fca311", "#ffba08"]// fallback

      

    
  return (
    <TouchableOpacity style={styles.gradientButtonWrapper} onPress={onPress}>
      <LinearGradient colors={gradientColors} style={styles.gradientButton}>
        {icon}
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
