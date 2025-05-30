import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/workoutCreateStyles";
import Button from "../components/Button";
import Navbar from "../components/Navbar"

const EXERCICIOS_DISPONIVEIS = [
  { nome: "Supino", icone: "barbell" },
  { nome: "Crossover", icone: "fitness" },
  { nome: "Agachamento", icone: "walk" },
  { nome: "Remada Curvada", icone: "walk" },
  { nome: "Elevação Lateral", icone: "body" },
  { nome: "Leg Press", icone: "barbell" },
  { nome: "Puxada Frente", icone: "fitness" },
];

export default function WorkoutCreateScreen({ navigation }) {
  const [nomeTreino, setNomeTreino] = useState("");
  const [exercicios, setExercicios] = useState(
    EXERCICIOS_DISPONIVEIS.map((ex) => ({ ...ex, selecionado: false }))
  );

  const toggleExercicio = (index) => {
    const copia = [...exercicios];
    copia[index].selecionado = !copia[index].selecionado;
    setExercicios(copia);
  };

  const salvarTreino = async () => {
    const selecionados = exercicios
      .filter((ex) => ex.selecionado)
      .map((ex) => ex.nome);

    if (!nomeTreino.trim()) {
      return Alert.alert("Nome obrigatório", "Dê um nome ao seu treino.");
    }

    if (selecionados.length === 0) {
      return Alert.alert(
        "Nenhum exercício",
        "Selecione pelo menos um exercício."
      );
    }

    const novoTreino = {
      nome: nomeTreino,
      exercicios: selecionados,
    };

    try {
      const dadosSalvos = await AsyncStorage.getItem("treinos");
      const treinos = dadosSalvos ? JSON.parse(dadosSalvos) : [];
      const novaLista = [novoTreino, ...treinos];

      await AsyncStorage.setItem("treinos", JSON.stringify(novaLista));

      Alert.alert("Treino salvo!", "Seu treino foi adicionado com sucesso.");

      // Limpa campos
      setNomeTreino("");
      setExercicios(
        EXERCICIOS_DISPONIVEIS.map((ex) => ({ ...ex, selecionado: false }))
      );

      // Volta para a tela de seleção
      navigation.navigate("WorkoutSelect");
    } catch (err) {
      Alert.alert("Erro", "Não foi possível salvar o treino.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar novo treino</Text>
<Navbar/>
      <TextInput
        placeholder="Nome do treino"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={nomeTreino}
        onChangeText={setNomeTreino}
      />

      <Text style={styles.subtitle}>Selecione os exercícios:</Text>

      <FlatList
        data={exercicios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => toggleExercicio(index)}
          >
            <Ionicons name={item.icone} size={24} color="#fff" />
            <Text style={styles.itemText}>{item.nome}</Text>
            <View
              style={
                item.selecionado ? styles.checkboxSelected : styles.checkbox
              }
            />
          </TouchableOpacity>
        )}
      />

      <Button title="Salvar Treino" variant="verde" onPress={salvarTreino} />
    </View>
  );
}
