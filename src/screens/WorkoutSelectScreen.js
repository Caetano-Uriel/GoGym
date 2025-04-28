import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles/workoutSelectStyles";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const treinos = [
  { id: "1", nome: "Treino A", detalhes: "Peito e Tríceps" },
  { id: "2", nome: "Treino B", detalhes: "Costas e Bíceps" },
  { id: "3", nome: "Treino C", detalhes: "Pernas e Ombros" },
];

export default function WorkoutSelectScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* FlatList para treinos */}
      <FlatList
        data={treinos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeTreino}>{item.nome}</Text>
            <Text style={styles.detalhes}>{item.detalhes}</Text>
            <Button title="Iniciar" variant="default" onPress={() => {}} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Parte de baixo - tempo e botão de troca */}
      <View style={styles.footer}>
        <Text style={styles.timer}>Tempo: 60s</Text>
        <Button
          title="Trocar Tempo"
          variant="default"
          onPress={() => {}}
          style={styles.trocarTempoBtn}
        />
      </View>
    </View>
  );
}
