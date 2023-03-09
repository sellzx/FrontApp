import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Animated, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Styles from '../assets/Styles';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleLogin = async () => {
      console.log(`Email: ${email}, Password: ${password}`);
      try {
        const response = await axios.get(`https://localhost:44361/api/Login/Login?email=${email}&password=${password}`);
        console.log(response);
        if (response.success) {
          setModalVisible(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleRegister = () => {
      console.log('Navigate to Register Screen');
      navigation.navigate("Register");
    };
  
    return (
      <>
        <View style={styles.container}>
        <View style={styles.headerPika}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }}
          style={styles.image}
        />
        </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
      </View>
      <Modal visible={modalVisible} animationType="slide">
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Success!</Text>
        <Button title="OK" onPress={() => setModalVisible(false)} />
      </View>
      </Modal>
      </>
    );
  };
  
  const styles = Styles;
  
  export default LoginScreen;