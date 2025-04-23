import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/workoutSelectStyles";

export default function WorkoutSelectScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hipertrofia</Text>

      <View style={styles.card}>
        <Text style={styles.nomeTreino}>Treino A</Text>
        <Text style={styles.detalhes}>Peito e Tríceps</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Iniciar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.nomeTreino}>Treino B</Text>
        <Text style={styles.detalhes}>Costas e Bíceps</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Iniciar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.nomeTreino}>Treino C</Text>
        <Text style={styles.detalhes}>Pernas e Ombros</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Iniciar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.timer}>Tempo: 60s</Text>
      <TouchableOpacity style={styles.trocarTempoBtn}>
        <Text style={styles.trocarTempoText}>Trocar Tempo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
