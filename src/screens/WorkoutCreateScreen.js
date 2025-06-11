import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/workoutCreateStyles";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { supabase } from "../../supabase";

export default function WorkoutCreateScreen({ navigation }) {
  const [nomeTreino, setNomeTreino] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [novoExercicio, setNovoExercicio] = useState("");
  const [grupoMuscular, setGrupoMuscular] = useState("");
  const [busca, setBusca] = useState("");
  const [exercicios, setExercicios] = useState([]);

  useEffect(() => {
    carregarExercicios();
  }, []);

  const carregarExercicios = async () => {
    const { data, error } = await supabase.from("exercicios").select("*");

    if (error) {
      console.error("Erro ao buscar exercícios:", error);
      return Alert.alert("Erro", "Não foi possível carregar os exercícios.");
    }

    const exerciciosComEstado = data.map((ex) => ({
      ...ex,
      selecionado: false,
    }));

    setExercicios(exerciciosComEstado);
  };

  const toggleExercicio = (index) => {
    const copia = [...exercicios];
    copia[index].selecionado = !copia[index].selecionado;
    setExercicios(copia);
  };
  const adicionarExercicio = async () => {
    if (!novoExercicio.trim() || !grupoMuscular.trim()) {
      return Alert.alert("Erro", "Preencha todos os campos.");
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Erro ao obter usuário:", userError);
      return Alert.alert("Erro", "Usuário não autenticado.");
    }

    const { data, error } = await supabase.from("exercicios").insert([
      {
        nome: novoExercicio,
        grupo_muscular: grupoMuscular,
        user_id: user.id, //a campo obrigatório para RLS
      },
    ]);

    if (error) {
      console.error("Erro ao adicionar exercício:", error.message);
      return Alert.alert("Erro", "Não foi possível salvar o exercício.");
    } else {
      console.log("Exercício adicionado:", data);
    }

    setNovoExercicio("");
    setGrupoMuscular("");
    setModalVisible(false);
    carregarExercicios();
  };

  const salvarTreino = async () => {
    const selecionados = exercicios
      .filter((ex) => ex.selecionado)
      .map((ex) => ex.nome);

    if (!nomeTreino.trim()) {
      return Alert.alert("Nome obrigatório", "Dê um nome ao seu treino.");
    }

    if (selecionados.length === 0) {
      return Alert.alert(
        "Nenhum exercício",
        "Selecione pelo menos um exercício."
      );
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("Erro ao obter usuário:", userError);
      return Alert.alert("Erro", "Usuário não autenticado.");
    }

    const { data: treinosExistentes, error: treinosError } = await supabase
      .from("treinos")
      .select("id")
      .eq("user_id", user.id);

    if (treinosError) {
      console.error("Erro ao buscar treinos existentes:", treinosError);
      return Alert.alert("Erro", "Erro ao contar os treinos existentes.");
    }

    const ordem = (treinosExistentes?.length || 0) + 1;

    const { error } = await supabase.from("treinos").insert([
      {
        nome: nomeTreino,
        exercicios: selecionados,
        ordem,
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar treino:", error);
      return Alert.alert("Erro", "Erro ao salvar no Supabase.");
    }

    Alert.alert("Sucesso", "Treino salvo com sucesso.");
    setNomeTreino("");
    carregarExercicios();
    navigation.navigate("WorkoutSelect");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar novo treino</Text>
      <Navbar busca={busca} setBusca={setBusca} />

      <TextInput
        placeholder="Nome do treino"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={nomeTreino}
        onChangeText={setNomeTreino}
      />

      <Text style={styles.subtitle}>Selecione os exercícios:</Text>

      <FlatList
        data={exercicios.filter((ex) =>
          ex.nome.toLowerCase().includes(busca.toLowerCase())
        )}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => toggleExercicio(index)}
          >
            <Ionicons name={item.icone || "barbell"} size={24} color="#fff" />
            <Text style={styles.itemText}>{item.nome}</Text>
            <View
              style={
                item.selecionado ? styles.checkboxSelected : styles.checkbox
              }
            />
          </TouchableOpacity>
        )}
      />

      <Button
        title="Adicionar Exercício"
        variant="azul"
        onPress={() => setModalVisible(true)}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Novo Exercício
            </Text>
            <TextInput
              placeholder="Nome do exercício"
              style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
              value={novoExercicio}
              onChangeText={setNovoExercicio}
            />
            <TextInput
              placeholder="Grupo muscular (peito, costas, pernas, cardio...)"
              style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
              value={grupoMuscular}
              onChangeText={setGrupoMuscular}
            />

            <Button
              title="Salvar"
              variant="verde"
              onPress={adicionarExercicio}
            />
            <Button
              title="Cancelar"
              variant="vermelho"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>

      <Button title="Salvar Treino" variant="verde" onPress={salvarTreino} />
    </View>
  );
}
