import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import  Styles from '../assets/Styles'
import RegistrationForm from '../Models/RegistrationForm';

const styles = Styles;

const HomeScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const handleSelectImagePress = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
  
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    };

    const handleTakePicturePress = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
  
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync();
  
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>My App</Text>
        </View>
        <View style={styles.content}>
          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
          <TouchableOpacity style={styles.button} onPress={handleSelectImagePress}>
            <Ionicons name="images-outline" size={32} color="white" />
            <Text style={styles.buttonText}>Select Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePicturePress}>
            <Ionicons name="camera-outline" size={32} color="white" />
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default HomeScreen;