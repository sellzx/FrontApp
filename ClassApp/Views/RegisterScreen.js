import React from 'react';
import { View } from 'react-native';
import  Styles from '../assets/Styles'
import RegistrationForm from '../Models/RegistrationForm';

const styles = Styles;

const RegisterScreen = ({ navigation }) => {
 
    return (
      <View style={styles.container}>
          <RegistrationForm />
      </View>
    );
  };

  export default RegisterScreen;