import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/workoutStyles";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

export default function WorkoutScreen() {
  const route = useRoute();
  const { treino } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);

  const exercicio = treino.exercicios[currentIndex];

  const proximo = () => {
    if (currentIndex < treino.exercicios.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const anterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{treino.nome}</Text>
      <Text style={styles.progress}>
        Exercício {currentIndex + 1} de {treino.exercicios.length}
      </Text>

      <View style={styles.card}>
        <Text style={styles.exercise}>{exercicio.nome}</Text>
        <Text style={styles.subinfo}>
          Séries: {exercicio.series}  |  Descanso: {exercicio.descanso}
        </Text>

        <Image source={{ uri: exercicio.imagem }} style={styles.image} />

        <Text style={styles.setInfo}>
          {exercicio.repeticoes} repetições  |  Carga: {exercicio.carga}
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}><Text>Execução</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}><Text>Músculos</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}><Text>Ampliar</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.altBtn}><Text>Alterar carga</Text></TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={anterior}><Ionicons name="arrow-back-circle" size={36} color="#0a0" /></TouchableOpacity>
        <TouchableOpacity style={styles.doneBtn}><Text style={styles.doneText}>✔ Realizado</Text></TouchableOpacity>
        <TouchableOpacity onPress={proximo}><Ionicons name="arrow-forward-circle" size={36} color="#0a0" /></TouchableOpacity>
      </View>
    </View>
  );
}
