import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={ LoginScreen } 
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home" 
            component={ HomeScreen } 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ ProfileScreen }
            options={{ headerBackButtonMenuEnabled:true }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  )
}