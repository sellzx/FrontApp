import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, Picker  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import handleTakePicturePress from '../Services/HandlerPhoto';
import  Styles from '../assets/Styles'
import ApiRoute from '../Services/Routes';
import handleSelectImagePress from '../Services/HandlerImage'
import AuthContext, { AuthProvider } from '../Services/AuthContext';
import AddFriend from '../Models/AddFriend';
import FriendsDropDown from '../Models/FriendsDropDown';

const styles = Styles;
const api = ApiRoute;

const FriendsScreen = ({navigation,title, data, onChat, onDelete}) => {
    const { userAuthenticated, username, handleLogout } = React.useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);
    const isFocused = useIsFocused();
    const [showOptions, setShowOptions] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    useEffect(() => {
      if (isFocused) {
      fetch(`${api}Friends/Friends?user=${username}`)
        .then((response) => response.json())
        .then((data) => setFriends(data));
      fetch(`${api}Friends/Requests?user=${username}`)
        .then((response) => response.json())
        .then((data) => setRequests(data));        
      }
    }, [isFocused]);

    

    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setShowOptions(false);
    };

    const handleFriendChange = (friend) => {
      setSelectedFriend(friend);
    };


    return (
      <View style={styles.container}>
        <AddFriend username={username} />
        <ScrollView>
          <FriendsDropDown friends={friends} />
        </ScrollView>
      </View>
      
    );
  };

  export default FriendsScreen;