import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Views/LoginScreen';
import RegisterScreen from './Views/RegisterScreen';
import AuthContext, { AuthProvider } from './Services/AuthContext';
import HomeScreen from './Views/HomeScreen';
import ChatScreen from './Views/Chats';
import FriendsScreen from './Views/Friends';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"       
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6C63FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Friends" component={FriendsScreen} />
          <Stack.Screen name="Chats" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
