import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext , { AuthProvider } from './AuthContext';
import { Ionicons } from '@expo/vector-icons';
import RegisterScreen from '../Views/RegisterScreen';
import LoginScreen from '../Views/LoginScreen';
import HomeScreen from '../Views/HomeScreen';
import ChatScreen from '../Views/Chats';
import FriendsScreen from '../Views/Friends';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function CustomNavigation() {
    const { userAuthenticated, username, pokemon, handleLogout } = React.useContext(AuthContext);
    if (!userAuthenticated) {
        return(
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
                </Stack.Navigator>
            </NavigationContainer>
            )
    } else {
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Friends') {
                        iconName = focused ? 'ios-person' : 'ios-person-outline';
                        } else if (route.name === 'Chats') {
                        iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#6C63FF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: [
                        {
                            display: 'flex'
                        }, null
                    ],
                    headerStyle: {
                        backgroundColor: '#6C63FF',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 24,
                      },
                    })}>
                  <Tab.Screen name="Friends" component={FriendsScreen} />
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="Chats" component={ChatScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}