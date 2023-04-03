import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Animated, Modal, TouchableOpacity, ScrollView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import handleTakePicturePress from '../Services/HandlerPhoto';
import  Styles from '../assets/Styles'
import ApiRoute from '../Services/Routes';
import handleSelectImagePress from '../Services/HandlerImage'
import AuthContext, { AuthProvider } from '../Services/AuthContext';
import AddFriend from '../Models/AddFriend';
import FriendsRequest from '../Models/FriendsRequest';
import FriendsList from '../Models/FriendsList';
import * as HandleFriends from '../Services/HandleFriends';

const styles = Styles;
const api = ApiRoute;

const FriendsScreen = ({navigation}) => {
    const { userAuthenticated, username, handleLogout } = React.useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);
    const isFocused = useIsFocused();
    const [fadeErr] = useState(new Animated.Value(0));

    useEffect(() => {
      if (isFocused) {
      fetch(`${api}Friends/Friends?user=${username}`)
        .then((response) => response.json())
        .then((data) => setFriends(data));
      fetch(`${api}Friends/Requests?user=${username}`)
        .then((response) => response.json())
        .then((data) => {if (data != '') {
          setRequests(data)
        } else  setRequests([])});        
      }
    }, [isFocused]);

    const handleModalClose = () => {
      setmodalVisibleErr(false);
      setEmail('');
      setPassword('');
      fadeErr.setValue(0);
    };


    return (
      <View style={styles.container}>
        <AddFriend username={username} />
        <ScrollView>
          <FriendsRequest friends={requests} username={username}/>
          <FriendsList friends={friends} username={username}/>
        </ScrollView>
      </View>
      
    );
  };

  export default FriendsScreen;