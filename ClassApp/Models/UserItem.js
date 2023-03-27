import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserItem = ({ username, onAccept, onDecline }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={onAccept}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.declineButton]} onPress={onDecline}>
          <Text style={styles.buttonText}>Rechazar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  acceptButton: {
    backgroundColor: '#2ED573',
  },
  declineButton: {
    backgroundColor: '#FF4757',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default UserItem;