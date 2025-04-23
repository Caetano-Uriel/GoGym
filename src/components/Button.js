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

  const variants = {
    "default" : ["#fca311", "#ffba08"],
    "azul" : ["#00c6ff", "#0072ff"],
    "amarelo" : ["#ffeb3b", "#fbc02d"],
    "rosa" : ["#ff6f91", "#ff9472"],
    "roxo" : ["#620ea7ce", "#620ea7ce"],
    "verde" : ["#32CD32", "#228B22"]
  }

  const gradientColors = variants[variant]

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
