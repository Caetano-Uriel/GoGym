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
  const toggleExercicio = (exercicioNome) => {
    const copia = [...exercicios];
    const index = copia.findIndex((ex) => ex.nome === exercicioNome);
    if (index !== -1) {
      const exercicio = copia[index];
      exercicio.selecionado = !exercicio.selecionado;
      if (exercicio.selecionado) {
        exercicio.repeticoes = "";
        exercicio.series = "";
      } else {
        delete exercicio.repeticoes;
        delete exercicio.series;
      }
      setExercicios(copia);
    }
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

    const { data, error } = await supabase
      .from("exercicios")
      .insert([
        {
          nome: novoExercicio,
          grupo_muscular: grupoMuscular,
          user_id: user.id,
        },
      ])
      .select();

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
  const handleExerciseInputChange = (workoutIndex, field, value) => {
    const updated = [...workouts];
    const exercicio = updated[workoutIndex].exercicios[0]; // ajustável para múltiplos

    if (typeof exercicio === "string") {
      updated[workoutIndex].exercicios[0] = { nome: exercicio, [field]: value };
    } else {
      updated[workoutIndex].exercicios[0] = {
        ...exercicio,
        [field]: value,
      };
    }

    setWorkouts(updated);
  };

  const salvarTreino = async () => {
    const selecionados = exercicios
      .filter((ex) => ex.selecionado)
      .map(({ nome, repeticoes, series }) => ({
        nome,
        repeticoes,
        series: series || null, // para diferenciar tempo
      }));

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

    const { error } = await supabase.from("treinos").insert([
      {
        nome: nomeTreino,
        exercicios: selecionados,
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
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleExercicio(item.nome)}
            >
              <Ionicons name={item.icone || "barbell"} size={24} color="#fff" />
              <Text style={styles.itemText}>{item.nome}</Text>
              <View
                style={
                  item.selecionado ? styles.checkboxSelected : styles.checkbox
                }
              />
            </TouchableOpacity>

            {item.selecionado && (
              <View style={styles.inputsContainer}>
                <TextInput
                  placeholder="Repetições ou tempo"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={item.repeticoes}
                  keyboardType="numeric"
                  onChangeText={(value) => {
                    const atualizados = [...exercicios];
                    const i = atualizados.findIndex(
                      (ex) => ex.nome === item.nome
                    );
                    atualizados[i].repeticoes = value;
                    setExercicios(atualizados);
                  }}
                />
                <TextInput
                  placeholder="Séries (se nulo, Primeiro campo será considerado tempo)"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={item.series}
                  keyboardType="numeric"
                  onChangeText={(value) => {
                    const atualizados = [...exercicios];
                    const i = atualizados.findIndex(
                      (ex) => ex.nome === item.nome
                    );
                    atualizados[i].series = value;
                    setExercicios(atualizados);
                  }}
                />
              </View>
            )}
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Exercício</Text>
            <TextInput
              placeholder="Nome do exercício"
              placeholderTextColor="#777"
              style={styles.modalInput}
              value={novoExercicio}
              onChangeText={setNovoExercicio}
            />{" "}
            <TextInput
              placeholder="Grupo muscular (peito, costas...)"
              placeholderTextColor="#777"
              style={styles.modalInput}
              value={grupoMuscular}
              onChangeText={setGrupoMuscular}
            />
            <View style={styles.modalButtonGroup}>
              <Button
                title="Cancelar"
                variant="vermelho"
                onPress={() => setModalVisible(false)}
              />
              <Button
                title="Salvar"
                variant="verde"
                onPress={adicionarExercicio}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.footerButtonsContainer}>
        <Button title="Salvar Treino" variant="verde" onPress={salvarTreino} />

        <Button
          title="Adicionar Exercício"
          variant="azul"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
}
