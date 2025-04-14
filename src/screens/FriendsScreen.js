import React from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../styles/amigosStyles";
import Button from "../components/Button";

const amigos = [
  { id: 1, nome: "Leonan Teixeira", treino: "Peito e Tríceps" },
  { id: 2, nome: "Marco Aurélio", treino: "Costas e Bíceps" },
  { id: 3, nome: "Marcos Montanari", treino: "Perna e Ombro" },
  { id: 4, nome: "Suzana Vieira", treino: "Costas e Bíceps" },
];

export default function FiendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput
        placeholder="Buscar amigo(s)"
        placeholderTextColor="#aaa"
        style={styles.input}
      />

      <FlatList
        data={amigos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.treino}>Último treino: {item.treino}</Text>
            </View>
            <Button style={styles.botao}>
            <Text style={styles.botaoTexto}>Desafiar</Text>
            </Button>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botaoDesafio}>
        <Text style={styles.botaoTexto}>Criar um Desafio</Text>
      </TouchableOpacity>
    </View>
  );
}
