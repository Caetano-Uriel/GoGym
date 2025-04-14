import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import GradientButton from "../components/Button";
import { styles } from "../styles/homeStyles";

export default function HomeScreen() {
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
        <Text style={styles.treinoText}>🎯 Meta do dia: 3 exercícios</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <GradientButton
          icon={<FontAwesome5 name="dumbbell" size={24} color="white" />}
          label="Começar Treino"
        />
        <GradientButton
          icon={<Ionicons name="bar-chart" size={24} color="white" />}
          label="Estatísticas"
        />
        <GradientButton
          icon={<Ionicons name="people" size={24} color="white" />}
          label="Amigos"
        />
        <GradientButton
          icon={<MaterialIcons name="restaurant" size={24} color="white" />}
          label="Dieta"
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
