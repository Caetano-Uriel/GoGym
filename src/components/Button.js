import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/buttonStyle";

export default function GradientButton({
  icon,
  title,
  variant = "default",
  onPress,
}) {
  const isBordaBranca = variant === "bordaBranca";

  const gradientColors =
    variant === "default"
      ? ["#fca311", "#ffba08"]
      : variant === "azul"
      ? ["#00c6ff", "#0072ff"]
      : variant === "amarelo"
      ? ["#ffeb3b", "#fbc02d"]
      : variant === "rosa"
      ? ["#ff6f91", "#ff9472"]
      : variant === "roxo"
      ? ["#620ea7ce", "#620ea7ce"]
      : variant === "verde"
      ? ["#32CD32", "#228B22"]
      : ["#fca311", "#ffba08"]; // fallback

  return (
    <TouchableOpacity
      style={[
        styles.gradientButtonWrapper,
        isBordaBranca && styles.bordaBrancaWrapper,
      ]}
      onPress={onPress}
    >
      {isBordaBranca ? (
        <View style={styles.bordaBrancaButton}>
          {icon}
          <Text style={styles.bordaBrancaText}>{title}</Text>
        </View>
      ) : (
        <LinearGradient colors={gradientColors} style={styles.gradientButton}>
          {icon}
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
}
