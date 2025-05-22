import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import Button from "../components/Button"; // Confirme se o caminho está correto
import { styles } from "../styles/workoutSelectStyles"; // Confirme se o caminho está correto
import { carregarTreinos, salvarTreinos } from "../storage/workoutStorage"; // Confirme se o caminho está correto
import { useFocusEffect } from "@react-navigation/native";

export default function WorkoutSelectScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([]);

  // Função para carregar os treinos
  const fetchWorkouts = async () => {
    console.log("Buscando treinos...");
    try {
      const data = await carregarTreinos();
      setWorkouts(data || []); // Garanta que seja um array mesmo se data for null/undefined
      console.log("Treinos carregados:", data);
    } catch (error) {
      console.error("Erro ao carregar treinos:", error);
      Alert.alert("Erro", "Não foi possível carregar os treinos.");
      setWorkouts([]); // Define como array vazio em caso de erro
    }
  };

  // Hook para carregar os treinos quando a tela ganha foco
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
    setWorkouts(newList); // Atualiza UI primeiro
    try {
      await salvarTreinos(newList); // Depois persiste
      console.log("Ordem dos treinos salva.");
    } catch (error) {
      console.error("Erro ao salvar a nova ordem dos treinos:", error);
      Alert.alert("Erro", "Não foi possível salvar a nova ordem dos treinos.");
      // Opcional: reverter a mudança na UI se a persistência falhar
      // fetchWorkouts(); // Recarrega os dados originais
    }
  };
  const confirmarExclusao = async (indexToDelete) => {
    console.log(">>> CONFIRMOU EXCLUSÃO <<<");

    const currentWorkouts = [...workouts];
    if (indexToDelete < 0 || indexToDelete >= currentWorkouts.length) {
      console.error("Índice de exclusão inválido dentro de confirmarExclusao");
      Alert.alert("Erro", "Índice de exclusão inválido.");
      return;
    }

    const newList = currentWorkouts.filter((_, idx) => idx !== indexToDelete);
    console.log("Lista após remoção:", newList);

    setWorkouts(newList);

    try {
      await salvarTreinos(newList);
      console.log("✅ Treino excluído e salvo com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao salvar treinos:", error);
    }
  };

  const handleDeleteWorkout = (indexToDelete) => {
    // Log para verificar se a função é chamada e qual o índice
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

    const workoutNameToDelete = workouts[indexToDelete]?.nome || "desconhecido"; // Pega o nome para o Alert

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
          title="↑"
          variant="reorder"
          onPress={() => moveItem(index, index - 1)}
          disabled={index === 0}
          // Não precisa de style aqui se for o primeiro, ou adicione para consistência
        />
        <Button
          title="↓"
          variant="reorder"
          onPress={() => moveItem(index, index + 1)}
          disabled={index === workouts.length - 1}
          style={styles.buttonInGroup} // Adiciona margem
        />
        <Button
          title="X"
          variant="delete"
          onPress={() => handleDeleteWorkout(index)}
          style={styles.buttonInGroup} // Adiciona margem
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
          keyExtractor={(item, index) => item.id || index.toString()} // Idealmente usar um ID único do item
          renderItem={renderItem}
        />
      )}
      <Button
        style={styles.newButton} // Note que 'style' em componentes customizados pode precisar de tratamento especial no componente Button
        title="Novo Treino"
        onPress={() =>
          navigation.navigate("WorkoutCreate", {
            // onSave: setWorkouts // Se WorkoutCreate modificar a lista, é melhor recarregar com fetchWorkouts ou passar uma função que chama fetchWorkouts.
            // Melhor ainda seria WorkoutCreate chamar salvarTreinos e aqui apenas recarregar com useFocusEffect
          })
        }
      />
    </View>
  );
}

// Adicione um estilo para a lista vazia, se desejar, em workoutSelectStyles.js
// Exemplo:
// emptyListText: {
//   textAlign: 'center',
//   marginTop: 20,
//   fontSize: 16,
//   color: '#666',
// },
