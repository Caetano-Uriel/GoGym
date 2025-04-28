import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import FriendsScreen from "./src/screens/FriendsScreen";
import WorkoutSelectScreen from "./src/screens/WorkoutSelectScreen.js";
import WorkoutCreateScreen from "./src/screens/WorkoutCreateScreen.js";
import { Ionicons } from "@expo/vector-icons"; // Importa o Ionicons aqui!
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WorkoutSelect"
          component={WorkoutSelectScreen}
          options={({ navigation }) => ({
            title: "Hipertrofia",
            headerStyle: {
              backgroundColor: "#000", // fundo preto no topo
            },
            headerTintColor: "#fff", // cor do ícone e do título
            headerTitleAlign: "center", // título centralizado
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={28}
                color="white"
                style={{ marginLeft: 16 }}
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   //return <LoginScreen />;
//   //return <RegisterScreen />;
//   //return <HomeScreen />;            //fazer com que a imagem do usuario se torne um botao que va para o perfil(tela nao criada)
//   //return <FriendsScreen />;       //botao de voltar
//   return <WorkoutSelectScreen />; //botao de criar e voltar
//   return <WorkoutCreateScreen />;   //botao de voltar
// }
