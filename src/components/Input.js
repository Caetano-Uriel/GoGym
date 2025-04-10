import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from '../styles/inputStyle';

export default function Input({ label, placeholder, secureTextEntry = false }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
