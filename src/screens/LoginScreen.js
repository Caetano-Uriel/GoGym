import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../styles/loginStyle";
import Input from "../components/Input";
import Button from "../components/Button";
import GradientButton from "../components/GradientButton";

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>

        <Input label="E-mail:" placeholder="Digite seu e-mail" />
        <Input label="Senha:" placeholder="Digite sua senha" secureTextEntry />
        <GradientButton title="Entrar" variant="cool" />
        <Button title="Entrar" variant="default" />
        <Button title="Entrar com Google" variant="google" />

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text style={styles.registerLink}>Criar conta</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
