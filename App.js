// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider, AuthContext } from './src/contexts/AuthContext';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import RankingScreen from './src/screens/RankingScreen';
import DietScreen from './src/screens/DietScreen';
import FriendsScreen from './src/screens/FriendsScreen';
import WorkoutSelectScreen from './src/screens/WorkoutSelectScreen';
import WorkoutCreateScreen from './src/screens/WorkoutCreateScreen';

const Stack = createNativeStackNavigator();

function AuthenticatedRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WorkoutSelect" component={WorkoutSelectScreen} options={{ title: 'Treinos' }} />
      <Stack.Screen name="WorkoutCreate" component={WorkoutCreateScreen} options={{ title: 'Criar Treino' }} />
      <Stack.Screen name="Ranking" component={RankingScreen} options={{ title: 'Ranking' }} />
      <Stack.Screen name="Friends" component={FriendsScreen} options={{ title: 'Amigos' }} />
      <Stack.Screen name="Diet" component={DietScreen} options={{ title: 'Dieta' }} />
    </Stack.Navigator>
  );
}

function UnauthenticatedRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
    </Stack.Navigator>
  );
}

function MainRoutes() {
  const { session, loading } = useContext(AuthContext);

  if (loading) return null; // ou um loading spinner

  return session ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </AuthProvider>
  );
}
