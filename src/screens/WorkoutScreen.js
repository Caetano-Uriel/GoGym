import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "../styles/workoutStyles";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import Button from "../components/Button";
import { supabase } from "../../supabase";

export default function WorkoutScreen() {
  const route = useRoute();
  const { treino } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCargaModal, setShowCargaModal] = useState(false);
  const [novaCarga, setNovaCarga] = useState("");
  const [descanso, setDescanso] = useState("");

  const exerciciosParse = treino.exercicios.map((ex) =>
    typeof ex === "string" ? JSON.parse(ex) : ex
  );

  const exercicio = exerciciosParse[currentIndex];

  const proximo = () => {
    if (currentIndex < exerciciosParse.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const anterior = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{treino.nome}</Text>
      <Text style={styles.progress}>
        Exercício {currentIndex + 1} de {exerciciosParse.length}
      </Text>

      <View style={styles.card}>
        <Text style={styles.exercise}>{exercicio.nome}</Text>
        <Text style={styles.subinfo}>
          Séries: {exercicio.series || "-"} | Descanso:{" "}
          {exercicio.descanso || "-"}
        </Text>

        <Image
          source={
            exercicio.imagem
              ? { uri: exercicio.imagem }
              : require("../../assets/placeholder.png") // imagem local de fallback
          }
          style={styles.image}
        />
        <Text style={styles.setInfo}>
          {exercicio.repeticoes || "-"} repetições | Carga:{" "}
          {exercicio.carga || "-"}
        </Text>

        {/* <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() =>
              Alert.alert("Execução", "Mostra o GIF ou vídeo futuramente")
            }
          >
            <Text>Execução</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text>Músculos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text>Ampliar</Text>
          </TouchableOpacity>
        </View> */}

        <TouchableOpacity
          style={styles.altBtn}
          onPress={() => setShowCargaModal(true)}
        >
          <Text>Alterar carga</Text>
        </TouchableOpacity>
        {showCargaModal && (
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Alterar carga</Text>
              <TextInput
                placeholder="Digite nova carga"
                style={styles.modalInput}
                keyboardType="numeric"
                value={novaCarga}
                onChangeText={setNovaCarga}
              />
              <Text style={styles.modalTitle}>Alterar Descanso</Text>

              <TextInput
                placeholder="Descanso (segundos)"
                style={styles.modalInput}
                keyboardType="numeric"
                value={descanso}
                onChangeText={setDescanso}
              />

              <View style={styles.modalButtons}>
                <Button
                  variant="delete"
                  title={"Cancelar"}
                  onPress={() => setShowCargaModal(false)}
                />

                <Button
                  variant="save"
                  title="Salvar"
                  onPress={async () => {
                    const copia = [...exerciciosParse];
                    copia[currentIndex].carga = novaCarga;
                    copia[currentIndex].descanso = descanso;

                    // Serializa de volta para strings JSON:
                    const copiaStringificada = copia.map((ex) =>
                      JSON.stringify(ex)
                    );

                    // Atualiza no Supabase
                    const { data: userData, error: userError } =
                      await supabase.auth.getUser();
                    if (userError || !userData?.user) {
                      Alert.alert("Erro", "Usuário não autenticado.");
                      return;
                    }

                    const { error: updateError } = await supabase
                      .from("treinos")
                      .update({ exercicios: copiaStringificada })
                      .eq("user_id", userData.user.id)
                      .eq("nome", treino.nome);

                    if (updateError) {
                      console.error(updateError);
                      Alert.alert(
                        "Erro",
                        "Não foi possível salvar no Supabase."
                      );
                      return;
                    }

                    setNovaCarga("");
                    setDescanso("");
                    setShowCargaModal(false);
                    Alert.alert("Salvo", "Carga e descanso atualizados.");
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={anterior}>
          <Ionicons name="arrow-back-circle" size={36} color="#0a0" />
        </TouchableOpacity>
        {currentIndex === exerciciosParse.length - 1 && (
          <TouchableOpacity
            style={[styles.doneBtn, { backgroundColor: "#0a0" }]}
            onPress={() => {
              Alert.alert("Treino concluído!", "Parabéns!");
              navigation.navigate("Home"); // ou outro destino
            }}
          >
            <Text style={styles.doneText}>Finalizar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={proximo}>
          <Ionicons name="arrow-forward-circle" size={36} color="#0a0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
