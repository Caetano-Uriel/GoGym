import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/workoutSelectStyles";
import { useFocusEffect } from "@react-navigation/native";
import { supabase } from "../../supabase";

export default function WorkoutSelectScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    console.log("Buscando treinos...");
    try {
      const { data, error } = await supabase.from("treinos").select("*");

      if (error) {
        console.error("Erro ao buscar do Supabase:", error);
        Alert.alert(
          "Erro",
          "Não foi possível carregar os treinos do Supabase."
        );
        return;
      }

      setWorkouts(data || []);
      console.log("Treinos carregados:", data);
    } catch (error) {
      console.error("Erro ao carregar treinos:", error);
      Alert.alert("Erro", "Não foi possível carregar os treinos.");
      setWorkouts([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchWorkouts();
    }, [])
  );

  const moveItem = async (fromIndex, toIndex) => {
    if (
      toIndex < 0 ||
      toIndex >= workouts.length ||
      fromIndex < 0 ||
      fromIndex >= workouts.length
    ) {
      console.warn("Tentativa de mover item para índice inválido.");
      return;
    }

    const newList = [...workouts];
    const item = newList.splice(fromIndex, 1)[0];
    newList.splice(toIndex, 0, item);
    setWorkouts(newList);

    try {
      await salvarTreinos(newList);
      console.log("Ordem dos treinos salva.");
    } catch (error) {
      console.error("Erro ao salvar a nova ordem dos treinos:", error);
      Alert.alert("Erro", "Não foi possível salvar a nova ordem dos treinos.");
    }
  };

  const salvarTreinos = async (novaLista) => {
    const updates = novaLista.map((treino, index) => ({
      id: treino.id,
      ordem: index,
    }));

    const { error } = await supabase
      .from("treinos")
      .upsert(updates, { onConflict: ["id"] });

    if (error) {
      throw error;
    }
  };

  const confirmarExclusao = async (indexToDelete) => {
    const treino = workouts[indexToDelete];
    if (!treino || !treino.id) {
      Alert.alert("Erro", "Não foi possível encontrar o treino para excluir.");
      return;
    }

    try {
      const { error } = await supabase
        .from("treinos")
        .delete()
        .eq("id", treino.id);

      if (error) {
        console.error("Erro ao excluir treino:", error);
        Alert.alert("Erro", "Falha ao excluir treino do Supabase.");
        return;
      }

      Alert.alert(
        "Treino excluído!",
        `O treino "${treino.nome}" foi removido.`
      );
      fetchWorkouts();
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Erro ao excluir treino.");
    }
  };

  const handleDeleteWorkout = (indexToDelete) => {
    console.log(`handleDeleteWorkout chamado para o índice: ${indexToDelete}`);
    console.log("Workouts atuais antes da tentativa de exclusão:", workouts);

    if (indexToDelete < 0 || indexToDelete >= workouts.length) {
      console.error("Índice de exclusão inválido:", indexToDelete);
      Alert.alert(
        "Erro",
        "Não foi possível excluir o treino: índice inválido."
      );
      return;
    }

    const workoutNameToDelete = workouts[indexToDelete]?.nome || "desconhecido";

    Alert.alert(
      "Excluir Treino",
      `Deseja realmente remover o treino "${workoutNameToDelete}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
          onPress: () => console.log("Exclusão cancelada"),
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => confirmarExclusao(indexToDelete),
        },
      ]
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.nome}</Text>
      <View style={styles.buttonGroup}>
  
        <Button
          title="X"
          variant="delete"
          onPress={() => handleDeleteWorkout(index)}
          style={styles.buttonInGroup}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Treinos</Text>
      {workouts.length === 0 ? (
        <Text style={styles.emptyListText}>Nenhum treino cadastrado.</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={renderItem}
        />
      )}
      <Button
        style={styles.newButton}
        title="Novo Treino"
        onPress={() => navigation.navigate("WorkoutCreate")}
      />
    </View>
  );
}
