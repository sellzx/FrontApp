import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Animated, Modal, Button } from 'react-native';
import Styles from '../assets/Styles';
import ApiRoute from '../Services/Routes';
import axios from 'axios';
import FriendItem from './FriendItem';
import * as HandleFriends from '../Services/HandleFriends'


const styles = Styles;

const FriendsList = ({friends, username}) => {
    const [fadeEr] = useState(new Animated.Value(0));
    const [modalVisibleErr, setmodalVisibleErr] = useState(false);
    const [alert, setApiResponse] = useState('');

    const handleAccept = (item) => {
      //navegar al chat con este item
    };
  
    const handleDecline = async (item) => {
      const response = await HandleFriends.handleDelete(username,item);
      setApiResponse(response.data.message);
      setmodalVisibleErr(true);
      Animated.timing(fadeErr, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
      }).start();
      return;
    };

    const handleModalClose = () => {
        setmodalVisibleErr(false);
        fadeErr.setValue(0);
    };
  
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, paddingHorizontal: 16, paddingTop: 16 }}>Amigos</Text>
        <FlatList
          data={friends}
          renderItem={({ item }) => (
            <FriendItem
              username={item}
              onAccept={() => handleAccept(item)}
              onDecline={() => handleDecline(item)}
            />
          )}
          keyExtractor={(item) => item}
        />
        <Modal animationType="none" visible={modalVisibleErr} transparent={true}>
            <View style={styles.modalBackground}>
            <Animated.View style={[styles.modalContent, { opacity: fadeEr }]}>
                <Text style={styles.modalText}>{alert}</Text>
                <Button title="OK" onPress={handleModalClose} />
            </Animated.View>
            </View>
        </Modal>
      </View>
    );
  };
export default FriendsList