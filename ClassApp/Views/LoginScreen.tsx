import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const LoginScreen = ({navigation}: {navigation: any}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleLogin = async () => {
      console.log(`Email: ${email}, Password: ${password}`);
      try {
        const response = await axios.get(`https://localhost:44361/api/Login/Login?email=${email}&password=${password}`);
        console.log(response);
        if (response.data.success) {
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
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          autoFocus={true}
        />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
        />
        <Button title="Log In" onPress={handleLogin} />
        <Button title="Register" type="outline" onPress={handleRegister} />
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
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
  });
  
  export default LoginScreen;