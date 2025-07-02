import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/components";

export default function Button({ icon, title, variant = "default", onPress }) {
  const isBordaBranca = variant === "bordaBranca";
  const isIconOnly = variant === "iconOnly";
  const isCompact =
    variant === "reorder" || variant === "delete" || variant === "save";

  const variants = {
    default: ["#fca311", "#ffba08"],
    azul: ["#00c6ff", "#0072ff"],
    amarelo: ["#ffeb3b", "#fbc02d"],
    rosa: ["#ff6f91", "#ff9472"],
    roxo: ["#620ea7ce", "#620ea7ce"],
    verde: ["#32CD32", "#228B22"],
    save: ["#32CD32", "#228B22"],
    reorder: ["#444", "#444"],
    delete: ["#e63946", "#d62828"],
    vermelho: ["#e63946", "#d62828"],
  };

  const gradientColors = variants[variant] || ["#ffffff", "#ffffff"];

  // Novo estilo compacto
  const compactStyle = {
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
    borderRadius: 6,
  };

  let content;
  if (isIconOnly) {
    content = <View style={styles.iconOnlyWrapper}>{icon}</View>;
  } else if (isBordaBranca) {
    content = (
      <View style={styles.bordaBrancaButton}>
        {icon}
        <Text style={styles.bordaBrancaText}>{title}</Text>
      </View>
    );
  } else {
    content = (
      <LinearGradient
        colors={gradientColors}
        style={[
          styles.gradientButton,
          isCompact && compactStyle, // Aplica se for compacto
        ]}
      >
        {icon}
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    );
  }

  const buttonStyle = [
    !isBordaBranca && !isIconOnly && !isCompact && styles.gradientButtonWrapper,
    isBordaBranca && styles.bordaBrancaWrapper,
    isIconOnly && { backgroundColor: "transparent" },
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {content}
    </TouchableOpacity>
  );
}
