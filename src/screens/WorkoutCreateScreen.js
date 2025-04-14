import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/criarTreinoStyles";
import { Ionicons } from "@expo/vector-icons";

export default function CriarTreinoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione os aparelhos</Text>

      <View style={styles.item}>
        <Ionicons name="fitness" size={24} color="white" />
        <Text style={styles.itemText}>Esteira</Text>
        <TouchableOpacity style={styles.checkbox} />
      </View>

      <View style={styles.item}>
        <Ionicons name="barbell" size={24} color="white" />
        <Text style={styles.itemText}>Leg Press</Text>
        <TouchableOpacity style={styles.checkboxSelected} />
      </View>

      <View style={styles.item}>
        <Ionicons name="walk" size={24} color="white" />
        <Text style={styles.itemText}>Remada Curvada</Text>
        <TouchableOpacity style={styles.checkboxSelected} />
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
