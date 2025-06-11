import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/components";

export default function Navbar({ busca, setBusca }) {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={20} style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Buscar exercício..."
          value={busca}
          onChangeText={setBusca}
          style={styles.searchInput}
        />
      </View>
    </View>
  );
}
