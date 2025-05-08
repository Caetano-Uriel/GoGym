import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import RankingScreen from "./src/screens/RankingScreen.js";
import DietScreen from "./src/screens/DietScreen.js";
import FriendsScreen from "./src/screens/FriendsScreen";
import WorkoutSelectScreen from "./src/screens/WorkoutSelectScreen.js";
import WorkoutCreateScreen from "./src/screens/WorkoutCreateScreen.js";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WorkoutSelect"
          component={WorkoutSelectScreen}
          options={{ title: "Treinos" }}
        />
        <Stack.Screen
          name="WorkoutCreate"
          component={WorkoutCreateScreen}
          options={{ title: "Criar Treino" }}
        />
        <Stack.Screen
          name="Ranking"
          component={RankingScreen}
          options={{ title: "Ranking" }}
        />
        <Stack.Screen
          name="Friends"
          component={FriendsScreen}
          options={{ title: "Amigos" }}
        />
        <Stack.Screen
          name="Diet"
          component={DietScreen}
          options={{ title: "Dieta" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
