import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/recoveryStyles";

export default function RecoveryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Conta</Text>
      <Text style={styles.subtitle}>Informe seu e-mail para receber o link:</Text>

      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#aaa" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar link</Text>
      </TouchableOpacity>
    </View>
  );
}
