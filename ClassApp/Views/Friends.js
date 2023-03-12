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
        <ScrollView>
          
        </ScrollView>
      </View>
      
    );
  };

  export default FriendsScreen;