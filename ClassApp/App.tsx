import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext , { AuthProvider } from './Services/AuthContext';
import CustomNavigation from './Services/CustomNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <CustomNavigation/>
    </AuthProvider>
  );
}
