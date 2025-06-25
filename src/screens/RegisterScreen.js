import React, { useState } from "react";
import { supabase } from "../../supabase";
import { Alert } from "react-native";
import { View, Text, ImageBackground, Image } from "react-native";
import Input from "../components/Input";
import styles from "../styles/loginStyle";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useURL } from "expo-linking";
WebBrowser.maybeCompleteAuthSession();

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();
  const handleGoogleLogin = async () => {
    try {
      const redirectTo = AuthSession.makeRedirectUri({ useProxy: true });

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });

      if (error) {
        console.error("Erro ao iniciar login com Google:", error);
        return Alert.alert("Erro", error.message);
      }

      const authUrl = data?.url;
      const result = await AuthSession.startAsync({ authUrl });

      if (result.type === "success") {
        Alert.alert("Sucesso", "Login com Google realizado!");
      } else {
        console.log("Login cancelado ou falhou:", result);
      }
    } catch (err) {
      console.error("Erro no login com Google:", err);
      Alert.alert("Erro", "Não foi possível completar o login com Google.");
    }
  };

  const handleCadastro = async () => {
    console.log("Cadastro clicado1");
    if (!nome || !email || !senha || !confirmarSenha) {
      return Alert.alert("Erro", "Preencha todos os campos.");
    }

    if (senha !== confirmarSenha) {
      return Alert.alert("Erro", "As senhas não coincidem.");
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
      options: {
        data: {
          nome: nome, 
        },
      },
    });

    if (error) {
      console.error("Erro ao cadastrar:", error);
      return Alert.alert("Erro", error.message);
    }

    Alert.alert("Sucesso", "Cadastro realizado! Verifique seu e-mail.");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    console.log("Cadastro clicado2");
  };

  return (
    <ImageBackground style={styles.background}>
      <Image
        source={require("../../assets/logo2.png")}
        style={styles.topImage}
      />
      <View style={styles.container}>
        <Text style={styles.title}>CADASTRO</Text>

        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Senha"
          placeholder="Crie uma senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        <Input
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <Button
          variant="roxo"
          title="Cadastrar"
          onPress={handleCadastro}
          disabled={!nome || !email || !senha || !confirmarSenha}
        />

        <Text style={styles.registerText}>
          Ja tem uma conta?{" "}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate("Login")}
          >
            Fazer login
          </Text>
        </Text>
      </View>
      <Button
        title="Cadastrar com Google"
        variant="bordaBranca"
        onPress={handleGoogleLogin}
      />
    </ImageBackground>
  );
}
