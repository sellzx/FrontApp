import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import  Styles from '../assets/Styles'
import RegistrationForm from '../Models/RegistrationForm';

const styles = Styles;

const RegisterScreen = ({ navigation }) => {
 
    const registrationForm = <RegistrationForm />;
    return (
      <View style={styles.container}>
          <RegistrationForm />
      </View>
    );
  };

  export default RegisterScreen;