import React, { useState } from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import styles from "../styles/loginStyle";
import Input from "../components/Input";
import Button from "../components/Button";
import { supabase } from "../../supabase";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });
    console.log("Email:", email);
    console.log("Senha:", senha);

    if (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/logo.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>

        <Input
          label="E-mail:"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Senha:"
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Button title="Entrar" variant="roxo" onPress={handleLogin} />

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Register")}
          >
            Criar conta
          </Text>
        </Text>
      </View>
      <Button title="Entrar com Google" variant="bordaBranca" />
    </ImageBackground>
  );
}
