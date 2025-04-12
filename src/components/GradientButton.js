import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientButton({
  icon,
  label,
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
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <LinearGradient colors={gradientColors} style={styles.button}>
        {icon}
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "47%",
  },
  button: {
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
