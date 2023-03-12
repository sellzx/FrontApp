import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  Styles from '../assets/Styles'
import handleSelectImagePress from '../Services/HandlerImage'
import AuthContext, { AuthProvider } from '../Services/AuthContext';
import handleTakePicturePress from '../Services/HandlerPhoto';

const styles = Styles;

const ChatScreen = ({navigation}) => {
    const { userAuthenticated, username, handleLogout } = React.useContext(AuthContext);

    const handleHome = async () => {
        navigation.navigate("Home")
    };

    const handleFriends = async () => {
        navigation.navigate("Friends")
    };  
    
    return (
      <View style={styles.container}>
        <ScrollView>
          
        </ScrollView>
      </View>
    );
  };

  export default ChatScreen;