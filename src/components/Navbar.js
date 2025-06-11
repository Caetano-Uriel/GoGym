// Componente de Pesquisa reutilizável para React Native + Expo
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

  export default function Navbar({ busca, setBusca }) {
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
    </View>
  );
}

