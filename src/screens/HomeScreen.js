import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons"; // quero parar de usar isso se possivel
import Button from "../components/Button";
import { styles } from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";

// Dentro do seu componente:
export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={32} color="white" />
        <Text style={styles.welcomeText}>
          Olá, <Text style={styles.username}>@user</Text>! 💪
        </Text>
      </View>

      <View style={styles.treinoBox}>
        <Text style={styles.treinoTitle}>Último treino</Text>
        <Text style={styles.treinoText}>🏋️ Peito e Tríceps</Text>
        <Text style={styles.treinoText}>🔥 450 kcal queimadas</Text>
        {/* <Text style={styles.treinoText}>🎯 Meta do dia: 3 exercícios</Text> */}
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          icon={<FontAwesome5 name="dumbbell" size={24} color="white" />}
          title="Treino"
          onPress={() => navigation.navigate("WorkoutSelect")}
        />
        <Button
          icon={<Ionicons name="bar-chart" size={24} color="white" />}
          title="Ranking"
          variant="roxo"
          onPress={() => navigation.navigate("Ranking")}
        />
        <Button
          icon={<Ionicons name="people" size={24} color="white" />}
          title="Amigos"
          variant="roxo"
          onPress={() => navigation.navigate("Friends")}
        />
        <Button
          icon={<MaterialIcons name="restaurant" size={24} color="white" />}
          title="Dieta"
          onPress={() => navigation.navigate("Diet")}
        />
      </View>

      <View style={styles.desafioBox}>
        <Text style={styles.desafioText}>
          ✨ Novo Desafio: Quem treina mais essa semana?
        </Text>
      </View>
    </ScrollView>
  );
}
