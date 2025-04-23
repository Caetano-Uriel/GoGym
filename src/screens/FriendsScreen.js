import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../styles/friendsStyles";
import Button from "../components/Button";
import { Feather } from "@expo/vector-icons";

const amigos = [
  {
    id: 1,
    nome: "Leonan Teixeira",
    treino: "Peito e Tríceps",
    imagem: require("../../assets/leonan.png"),
  },
  {
    id: 2,
    nome: "Marco Aurélio",
    treino: "Costas e Bíceps",
    imagem: require("../../assets/marco.png"),
  },
  {
    id: 3,
    nome: "Marcos Montanari",
    treino: "Perna e Ombro",
    imagem: require("../../assets/montanari.png"),
  },
  {
    id: 4,
    nome: "Suzana Vieira",
    treino: "Costas e Bíceps",
    imagem: require("../../assets/suzana.png"),
  },
];

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#aaa" />
        <TextInput
          placeholder="Buscar amigo(a)"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
      </View>

      <FlatList
        data={amigos}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.treino}>Último Treino: {item.treino}</Text>
            </View>
            <Button title="Desafiar" variant="default" />
          </View>
        )}
      />

      <Button title="Criar um Desafio" variant="default" />
    </View>
  );
}
