import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen.js";
import RegisterScreen from "./src/screens/RegisterScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import FriendsScreen from "./src/screens/FriendsScreen";
import WorkoutSelectScreen from "./src/screens/WorkoutSelectScreen.js"
import WorkoutCreateScreen from "./src/screens/WorkoutCreateScreen.js"

export default function App() {
  //return <LoginScreen />;
  //return <RegisterScreen/>;
  //return <HomeScreen/>;
  //return <FriendsScreen/>
  return <WorkoutCreateScreen/>
}
