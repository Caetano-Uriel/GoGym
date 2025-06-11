import React from "react";
import { TextInput, Text, View } from "react-native";
import styles from "../styles/components";

export default function Input({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
}) {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
