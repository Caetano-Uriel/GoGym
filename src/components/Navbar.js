// Componente de Pesquisa reutilizável para React Native + Expo
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EXERCICIOS_DISPONIVEIS = [
  { nome: "Supino", icone: "barbell" },
  { nome: "Crossover", icone: "fitness" },
  { nome: "Agachamento", icone: "walk" },
  { nome: "Remada Curvada", icone: "walk" },
  { nome: "Elevação Lateral", icone: "body" },
  { nome: "Leg Press", icone: "barbell" },
  { nome: "Puxada Frente", icone: "fitness" },
];

export default function BarraDePesquisa() {
  const [busca, setBusca] = useState('');

  const resultadosFiltrados = EXERCICIOS_DISPONIVEIS.filter(exercicio =>
    exercicio.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 8, padding: 8 }}>
        <Ionicons name="search" size={20} style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Buscar exercício..."
          value={busca}
          onChangeText={setBusca}
          style={{ flex: 1 }}
        />
      </View>

      <FlatList
        data={resultadosFiltrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 8, borderBottomWidth: 0.5 }}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}
