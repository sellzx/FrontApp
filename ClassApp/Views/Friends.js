import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import  Styles from '../assets/Styles'
import RegistrationForm from '../Models/RegistrationForm';
import handleSelectImagePress from '../Services/HandlerImage'

const styles = Styles;

const FriendsScreen = ({navigation}) => {
    const [imageUri, setImageUri] = useState(null);

    const handleTakePicturePress = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        alert('Se necesitan permisos de camara para funcionar!');
        return;
      }
      
      const result = await ImagePicker.launchCameraAsync();
      
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    };

    const handleHome = async () => {
        navigation.navigate("Home")
    };

    const handleChats = async () => {
        navigation.navigate("Chats")
      };
    
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="people-outline" size={30} color="#a3d4ff" />
            <Text style={styles.iconText}>Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera-outline" size={30} color="#a3d4ff" onPress={handleTakePicturePress}/>
            <Text style={styles.iconText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="home-outline" size={30} color="#a3d4ff" onPress={handleHome} />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="images-outline" size={30} color="#a3d4ff" onPress={handleSelectImagePress}/>
            <Text style={styles.iconText}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={30} color="#a3d4ff" onPress={handleChats}/>
            <Text style={styles.iconText}>Chats</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  };

  export default FriendsScreen;