// HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../supabase";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        const nome = data.user.user_metadata?.nome;
        setUserEmail(nome || data.user.email); // mostra o nome se existir
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        {/* Você pode remover o Ionicons se quiser */}
        <Text style={styles.welcomeText}>
          Olá, <Text style={styles.username}>{userEmail}</Text>! 💪
        </Text>
      </View>

      <View style={styles.treinoBox}>
        <Text style={styles.treinoTitle}>Último treino</Text>
        <Text style={styles.treinoText}>🏋️ Peito e Tríceps</Text>
        <Text style={styles.treinoText}>🔥 450 kcal queimadas</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Treino"
          onPress={() => navigation.navigate("WorkoutSelect")}
        />
        <Button
          title="Ranking"
          variant="roxo"
          onPress={() => navigation.navigate("Ranking")}
        />
        <Button
          title="Amigos"
          variant="roxo"
          onPress={() => navigation.navigate("Friends")}
        />
        <Button title="Dieta" onPress={() => navigation.navigate("Diet")} />
      </View>

      <View style={styles.desafioBox}>
        <Text style={styles.desafioText}>
          ✨ Novo Desafio: Quem treina mais essa semana?
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Sair" variant="bordaBranca" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}
