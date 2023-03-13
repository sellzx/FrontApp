import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import  Styles from '../assets/Styles'
import handleTakePicturePress from '../Services/HandlerPhoto';
import handleSelectImagePress from '../Services/HandlerImage';
import PostCard from '../Models/PostCard';
import AuthContext, { AuthProvider } from '../Services/AuthContext';
import axios from 'axios';
import ApiRoute from '../Services/Routes';

const api = ApiRoute;
const styles = Styles;

const HomeScreen = ({navigation}) => {
    const { userAuthenticated, username, pokemon, handleLogout } = React.useContext(AuthContext);
    const [imageUris, setImageUris] = useState([]);
    const [items, setItems] = useState([]);

    const isFocused = useIsFocused();
    const ItemList = ({ items }) => {
      return (
        <View>
          {items.map((item,i) => (
            <PostCard key={item.url} post={item} imageUri={imageUris[i]} pokemon={pokemon}></PostCard>
          ))}
        </View>
      );
    };

    useEffect(() => {
      if (isFocused) {
      console.log(pokemon)
      fetch(`${api}Image/GetAllPosts?username=${username}`)
        .then((response) => response.json())
        .then((data) => setItems(data));
      }
    }, [isFocused]);

    useEffect(() => {
      if (items.length > 0) {
        setImageUris([]);
        items.forEach(item => {
          fetchImageUri(item.url)
        });
      }
    }, [items]);


    const fetchImageUri = async (url) => {
      try {
        const response = await axios.get(`${api}Image/GetImage?url=${url}`,  {responseType: 'blob'});
        const localUri = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(response.data);
        });
        setImageUris(prevUris => [...prevUris, localUri]);
      } catch (error) {
        console.error(error);
      }

    }
    
    return (
      <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleTakePicturePress(username)}>
          <Ionicons name="camera-outline" size={25} style={styles.iconButton.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectImagePress(username)}>
          <Ionicons name="images-outline" size={25} style={styles.iconButton.tabIcon} />
        </TouchableOpacity>
      </View>
        <ScrollView>
          <ItemList items={items}/>
        </ScrollView>
      </View>
    );
  };

  export default HomeScreen;