import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/workoutCreateStyles";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";

// Lista de exercicios
const exercicios = [
  { nome: "Esteira", icone: "fitness", selecionado: false },
  { nome: "Leg Press", icone: "barbell", selecionado: true },
  { nome: "Remada Curvada", icone: "walk", selecionado: true },
  { nome: "Remada Curvada", icone: "walk", selecionado: true },
  { nome: "Remada Curvada", icone: "walk", selecionado: false },
];

export default function WorkoutCreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione os exercicios</Text>

      {/* map para renderizar os exercicios */}
      {exercicios.map((item, index) => (
        <View key={index} style={styles.item}>
          <Ionicons name={item.icone} size={24} color="white" />
          <Text style={styles.itemText}>{item.nome}</Text>

          {/* Condicional para mostrar o checkbox certo */}
          <TouchableOpacity
            style={item.selecionado ? styles.checkboxSelected : styles.checkbox}
          />
        </View>
      ))}
<Button title="Criar" variant="verde"/>
    </View>
  );
}
// mexer no style