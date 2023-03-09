import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import  Styles from '../assets/Styles'
import RegistrationForm from '../Models/RegistrationForm';

const styles = Styles;

const RegisterScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleRegister = () => {
      const formData = registrationForm.getFormData();
      console.log(formData);
      // add your registration logic here
    };
  
    const registrationForm = <RegistrationForm />;
    return (
      <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {registrationForm}
        </View>
        <Button
          title="Register"
          onPress={handleRegister}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
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

  export default RegisterScreen;