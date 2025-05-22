import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import Input from "../components/Input";
import styles from "../styles/loginStyle";
import Button from "../components/Button";

export default function RegisterScreen() {
  return (
    
    <ImageBackground 
      style={styles.background}
    >
      <Image 
        source={require("../../assets/logo2.png")} 
        style={styles.topImage}
      />
      <View style={styles.container}>
        <Text style={styles.title}>CADASTRO</Text>


        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="E-mail" placeholder="Digite seu e-mail" />
        <Input label="Senha" placeholder="Crie uma senha" secureTextEntry />
        <Input
          label="Confirmar Senha"
          placeholder="Confirme sua senha"
          secureTextEntry
        />

        <Button
          variant="roxo"
          title="Cadastrar"
          onPress={() => console.log("Cadastro enviado")}
        />

        <Text style={styles.registerText}>
          Ja tem uma conta? <Text style={styles.registerLink}>Fazer login</Text>
        </Text>
      </View>
      <Button title="Cadastrar com Google" variant="bordaBranca" />
    </ImageBackground>
  );
}
