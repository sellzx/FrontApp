import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import handleTakePicturePress from '../Services/HandlerPhoto';
import  Styles from '../assets/Styles'
import handleSelectImagePress from '../Services/HandlerImage'
import AuthContext, { AuthProvider } from '../Services/AuthContext';

const styles = Styles;

const FriendsScreen = ({navigation}) => {
    const { userAuthenticated, username, handleLogout } = React.useContext(AuthContext);

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
            <Ionicons name="people-outline" size={30}style={styles.iconButton.tabIcon} />
            <Text style={styles.iconText}>Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="camera-outline" size={30} style={styles.iconButton.tabIcon} onPress={() => handleTakePicturePress(username)}/>
            <Text style={styles.iconText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="home-outline" size={30}style={styles.iconButton.tabIcon} onPress={handleHome} />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="images-outline" size={30}style={styles.iconButton.tabIcon} onPress={() => handleSelectImagePress(username)}/>
            <Text style={styles.iconText}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={30}style={styles.iconButton.tabIcon} onPress={handleChats}/>
            <Text style={styles.iconText}>Chats</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          
        </ScrollView>
      </View>
      
    );
  };

  export default FriendsScreen;