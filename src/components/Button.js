import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/buttonStyle";

export default function Button({ icon, title, variant = "default", onPress }) {
  const isBordaBranca = variant === "bordaBranca";
  const isIconOnly = variant === "iconOnly";

  const variants = {
    default: ["#fca311", "#ffba08"],
    azul: ["#00c6ff", "#0072ff"],
    amarelo: ["#ffeb3b", "#fbc02d"],
    rosa: ["#ff6f91", "#ff9472"],
    roxo: ["#620ea7ce", "#620ea7ce"],
    verde: ["#32CD32", "#228B22"],
  };

  const gradientColors = variants[variant] || ["#ffffff", "#ffffff"];

  return (
    <TouchableOpacity
      style={[
        styles.gradientButtonWrapper,
        isBordaBranca && styles.bordaBrancaWrapper,
        isIconOnly && { backgroundColor: "transparent" }, // não usa gradiente
      ]}
      onPress={onPress}
    >
      {isIconOnly ? (
        <View style={styles.iconOnlyWrapper}>{icon}</View>
      ) : isBordaBranca ? (
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
