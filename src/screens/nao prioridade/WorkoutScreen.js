import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/workoutStyles";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treino A - Peito e Tríceps</Text>
      <Text style={styles.progress}>Exercício 2 de 6</Text>

      <View style={styles.card}>
        <Text style={styles.exercise}>Supino Reto</Text>
        <Text style={styles.info}>4x10 - 40kg</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Próximo exercício</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.pauseBtn}>
        <Ionicons name="pause-circle" size={32} color="#fff" />
        <Text style={styles.pauseText}>Pausar</Text>
      </TouchableOpacity>
    </View>
  );
}