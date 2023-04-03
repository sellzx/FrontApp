import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Animated, Modal, Button } from 'react-native';
import Styles from '../assets/Styles';
import ApiRoute from '../Services/Routes';
import axios from 'axios';


const api = ApiRoute;
const styles = Styles;
const AddFriend = ({ username }) => {
    const [user, setUser] = useState('');
    const [fadeErr] = useState(new Animated.Value(0));
    const [modalVisibleErr, setmodalVisibleErr] = useState(false);
    const [alert, setApiResponse] = useState('');

    const handleAddFriend = async () => {
        if (user.trim() !== '') {
            const response = await axios.post(`${api}Friends/Request`, {
                Requester: username,
                Requested: user
              });

            setApiResponse(response.data.message);
            setmodalVisibleErr(true);
            Animated.timing(fadeErr, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
            return;
        }
    };

    const handleModalClose = () => {
        setmodalVisibleErr(false);
        setUser('');
        fadeErr.setValue(0);
    };

    return(
        <View style={{ padding: 16 }}>
            <TextInput
                placeholder="Usuario a agregar"
                value={user}
                onChangeText={setUser}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddFriend}>
                <Text style={styles.buttonText}>Añadir</Text>
            </TouchableOpacity>
            <Modal animationType="none" visible={modalVisibleErr} transparent={true}>
                <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalContent, { opacity: fadeErr }]}>
                    <Text style={styles.modalText}>{alert}</Text>
                    <Button title="OK" onPress={handleModalClose} />
                </Animated.View>
                </View>
            </Modal>
        </View>
    )
}
export default AddFriend;