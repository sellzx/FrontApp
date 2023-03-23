import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Animated, Modal } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext, { AuthProvider } from '../Services/AuthContext';
import Styles from '../assets/Styles';
import handleLoginf from '../Services/HandleLogin';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisibleErr, setmodalVisibleErr] = useState(false);
    const [fadeErr] = useState(new Animated.Value(0));
    const [alert, setApiResponse] = useState('');
    const { handleLogin } = React.useContext(AuthContext);
  
    const handleLoginMod = async () => {
      if (!email || !password) {
        setApiResponse("Email y contraseña requeridos!");
        setmodalVisibleErr(true);
        Animated.timing(fadeErr, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
        return;
      }
      const response = await handleLoginf(email,password);
      setApiResponse(response.message);
      if (response.success) {
        handleLogin(email);
      } else {
        setmodalVisibleErr(true);
        Animated.timing(fadeErr, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
        return;
      }

    };
  
    const handleRegister = () => {
      navigation.navigate("Register");
    };

    const handleModalClose = () => {
      setmodalVisibleErr(false);
      setEmail('');
      setPassword('');
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
            <TouchableOpacity style={styles.button} onPress={handleLoginMod}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
      </View>
      <Modal animationType="none" visible={modalVisibleErr} transparent={true}>
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContent, { opacity: fadeErr }]}>
            <Text style={styles.modalText}>{alert}</Text>
            <Button title="OK" onPress={handleModalClose} />
          </Animated.View>
        </View>
      </Modal>
      </>
    );
  };
  
  const styles = Styles;

  export default LoginScreen;