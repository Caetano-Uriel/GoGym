import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/workoutSelectStyles";
export default function WorkoutSelectScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([
    "Peito e Tríceps",
    "Costas e Bíceps",
    "Perna",
    "Ombro",
  ]);

  const moveItem = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= workouts.length) return;
    const newList = [...workouts];
    const item = newList.splice(fromIndex, 1)[0];
    newList.splice(toIndex, 0, item);
    setWorkouts(newList);
  };

  const handleNewWorkout = () => {
    Alert.prompt("Novo Treino", "Digite o nome do novo treino:", (text) => {
      if (text) setWorkouts([...workouts, text]);
    });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <View style={styles.buttonGroup}>
        <Button
          title={"↑"}
          variant="reorder"
          onPress={() => moveItem(index, index - 1)}
        />
        <Button
          title={"↓"}
          variant="reorder"
          onPress={() => moveItem(index, index + 1)}
        />
        <Button
          title={"X"}
          variant="delete"
          onPress={() => handleDeleteWorkout(index)}
        />
      </View>
    </View>
  );

  const handleDeleteWorkout = (index) => {
    Alert.alert("Excluir Treino", "Deseja remover este treino?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          const newList = [...workouts];
          newList.splice(index, 1);
          setWorkouts(newList);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Treinos</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Button
        style={styles.newButton}
        title={"Novo Treino"}
        onPress={() => navigation.navigate("WorkoutCreate")}
      />
    </View>
    //handleNewWorkout
  );
}
