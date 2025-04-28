import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import LoginScreen from "./src/screens/LoginScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import FriendsScreen from "./src/screens/FriendsScreen";
import WorkoutSelectScreen from "./src/screens/WorkoutSelectScreen.js";
import WorkoutCreateScreen from "./src/screens/WorkoutCreateScreen.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WorkoutSelect">
        <Stack.Screen name="WorkoutSelect" component={WorkoutSelectScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
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
