import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/loginStyle';

export default function LoginScreen() {
  return (
    <ImageBackground 
      source={require('../../assets/background.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>

        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#aaa" secureTextEntry />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não tem uma conta? <Text style={styles.registerLink}>Criar conta</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
