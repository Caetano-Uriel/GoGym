import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen.js';
import RegisterScreen from './src/screens/RegisterScreen.js';

export default function App() {
 //return <LoginScreen />;
return <RegisterScreen/>;
}

