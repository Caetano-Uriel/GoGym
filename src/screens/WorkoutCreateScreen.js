import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/workoutCreateStyles";
import { Ionicons } from "@expo/vector-icons";

// Lista de aparelhos
const aparelhos = [
  { nome: "Esteira", icone: "fitness", selecionado: false },
  { nome: "Leg Press", icone: "barbell", selecionado: true },
  { nome: "Remada Curvada", icone: "walk", selecionado: true },
  { nome: "Remada Curvada", icone: "walk", selecionado: true },
  { nome: "Remada Curvada", icone: "walk", selecionado: false },
];

export default function WorkoutCreateScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione os aparelhos</Text>

      {/* map para renderizar os aparelhos */}
      {aparelhos.map((item, index) => (
        <View key={index} style={styles.item}>
          <Ionicons name={item.icone} size={24} color="white" />
          <Text style={styles.itemText}>{item.nome}</Text>

          {/* Condicional para mostrar o checkbox certo */}
          <TouchableOpacity
            style={item.selecionado ? styles.checkboxSelected : styles.checkbox}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
