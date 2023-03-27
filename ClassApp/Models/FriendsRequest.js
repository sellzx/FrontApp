import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Animated, Modal, Button } from 'react-native';
import Styles from '../assets/Styles';
import ApiRoute from '../Services/Routes';
import axios from 'axios';
import UserItem from '../Models/UserItem';

const styles = Styles;

const FriendsRequest = ({friends, username}) => {
    const [fadeEr] = useState(new Animated.Value(0));
    const [modalVisibleErr, setmodalVisibleErr] = useState(false);
    const [alert, setApiResponse] = useState('');

    const handleAccept = async (item) => {
      const response = await HandleFriends.handleAccept(username,item);
      setApiResponse(response.data.message);
      setmodalVisibleErr(true);
      Animated.timing(fadeErr, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
      }).start();
      return;
    };
  
    const handleDecline = async (item) => {
      const response = await HandleFriends.handleReject(username,item);
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
        <Text style={{ fontWeight: 'bold', fontSize: 24, paddingHorizontal: 16, paddingTop: 16 }}>Friend requests</Text>
        <FlatList
          data={friends}
          renderItem={({ item }) => (
            <UserItem
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
export default FriendsRequest