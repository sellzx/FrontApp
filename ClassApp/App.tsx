import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext , { AuthProvider } from './Services/AuthContext';
import RegisterScreen from './Views/RegisterScreen';
import LoginScreen from './Views/LoginScreen';
import HomeScreen from './Views/HomeScreen';
import ChatScreen from './Views/Chats';
import FriendsScreen from './Views/Friends';
import CustomNavigation from './Services/CustomNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <CustomNavigation/>
    </AuthProvider>
  );
}
