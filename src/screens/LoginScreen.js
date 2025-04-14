import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "../styles/loginStyle";
import Input from "../components/Input";
import Button from "../components/Button";

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
        <Button title="Entrar" variant="verde"/>

        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text style={styles.registerLink}>Criar conta</Text>
        </Text>
      </View>
        <Button title="Entrar com Google" variant="bordaBranca" />
      
    </ImageBackground>
  );
}
