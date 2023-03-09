import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import  Styles from '../assets/Styles'
import RegistrationForm from '../Models/RegistrationForm';

const styles = Styles;

const ChatScreen = ({navigation}) => {
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

    const handleFriends = async () => {
        navigation.navigate("Friends")
    };  
    
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="people-outline" size={30} color="#333" onPress={handleFriends}/>
            <Text style={styles.iconText}>Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera-outline" size={30} color="#333" onPress={handleTakePicturePress}/>
            <Text style={styles.iconText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="home-outline" size={30} color="#333" onPress={handleHome} />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="images-outline" size={30} color="#333" onPress={handleSelectImagePress}/>
            <Text style={styles.iconText}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={30} color="#333" />
            <Text style={styles.iconText}>Chats</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  };

  export default ChatScreen;