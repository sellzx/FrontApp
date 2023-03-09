import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Animated, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Styles from '../assets/Styles';
import ApiRoute from '../Services/Routes'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleErr, setmodalVisibleErr] = useState(false);
    const [fadeAnim] = useState(new Animated.Value(0));
    const [fadeErr] = useState(new Animated.Value(0));
  
    const handleLogin = async () => {
      if (!email || !password) {
        setmodalVisibleErr(true);
        Animated.timing(fadeErr, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
        return;
      }
      console.log(`Email: ${email}, Password: ${password}`);
      try {
        const response = await axios.get(`${api}Login/Login?email=${email}&password=${password}`);
        if (response.data.success) {
          setModalVisible(true);
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          navigation.navigate("Home");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleRegister = () => {
      navigation.navigate("Register");
    };

    const handleModalClose = () => {
      // Reset state and hide modal
      setModalVisible(false);
      setmodalVisibleErr(false);
      setEmail('');
      setPassword('');
      fadeAnim.setValue(0);
      fadeErr.setValue(0);
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
              inputMode="email" 
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
      <Modal animationType="none" visible={modalVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Text style={styles.modalText}>Login Correcto!</Text>
            <Button title="OK" onPress={handleModalClose} />
          </Animated.View>
        </View>
      </Modal>
      <Modal animationType="none" visible={modalVisibleErr} transparent={true}>
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContent, { opacity: fadeErr }]}>
            <Text style={styles.modalText}>Email y contraseña requeridos!</Text>
            <Button title="OK" onPress={handleModalClose} />
          </Animated.View>
        </View>
      </Modal>
      </>
    );
  };
  
  const styles = Styles;
  const api = ApiRoute;

  export default LoginScreen;