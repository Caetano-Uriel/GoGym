import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Input from "../components/Input";
import styles from "../styles/loginStyle";
import Button from "../components/Button";
/* COMENTÁRIO DE URIEL : 
- LEMBRAR DE TIRAR DÚVIDA COM O PROFESSOR:
SERIA VIAVEL CRIAR UM NOVO STYLE PARA O REGISTER SCREEN? OU POSSO REUTILIZAR O DE LOGIN?
  EU DIEGO TO CRIANDO 1 PRA CADA MAS SE FOR POSSIVEL REUTILIZAR VOU TER FEITO MT COISA ATOA
*/

export default function RegisterScreen() {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
    >
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
