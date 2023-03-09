import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
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
        <View style={styles.form}>
          {registrationForm}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
      </>
    );
  };

  export default RegisterScreen;