import React, { useState } from 'react';
import { TextInput, Button, TouchableOpacity, View, Text, Animated, Modal } from 'react-native';
import Styles from '../assets/Styles';
import axios from 'axios';
import ApiRoute from '../Services/Routes'

const styles = Styles;
const api = ApiRoute;

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [alert, setApiResponse] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [fadeErr] = useState(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleErr, setmodalVisibleErr] = useState(false);


  const handleFormSubmit = async () => {
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Name: ${name}`);
    console.log(`Last Name: ${lastName}`);
    if (!email || !password || !name || !lastName) {
      setApiResponse("Todos los campos son requeridos")
      setmodalVisibleErr(true);
      Animated.timing(fadeErr, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      return;
    }
    const response = await axios.post(`${api}Login/Register`, {
      email: email,
      password: password,
      name: name,
      lastname: lastName
    });
    if (response.data.success) {
      setModalVisible(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      navigation.navigate("Home");
    } else {
      setApiResponse(response.data.message)
      setmodalVisibleErr(true);
      Animated.timing(fadeErr, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      return;
    }
  }

  const handleModalClose = () => {
    // Reset state and hide modal
    setModalVisible(false);
    setmodalVisibleErr(false);
    fadeAnim.setValue(0);
    fadeErr.setValue(0);
  };

  return (
    <>
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
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Lastname"
          onChangeText={setLastName}
          value={lastName}
        />
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      </View>
      <Modal animationType="none" visible={modalVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
            <Text style={styles.modalText}>Usuario Registrado!</Text>
            <Button title="OK" onPress={handleModalClose} />
          </Animated.View>
        </View>
      </Modal>
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
}