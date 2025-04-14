import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles/rankingStyles";

const data = [
  { id: 1, name: "Leo", points: 1200 },
  { id: 2, name: "Marco", points: 950 },
  { id: 3, name: "Lucas", points: 800 },
];

export default function RankingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking Semanal</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.position}>{index + 1}º</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.points}>{item.points} pts</Text>
          </View>
        )}
      />
    </View>
  );
}
