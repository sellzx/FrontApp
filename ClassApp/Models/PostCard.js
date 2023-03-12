import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const PostCard = ({ post, imageUri, pokemon }) => {


  const handleLikePress = () => {
    console.log((pokemon).toString());
  };


  return (
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.headerContainer}>
        {pokemon != undefined && pokemon > 0 && <Image style={styles.avatar} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png` }}/>}
        {!(pokemon != undefined && pokemon > 0) && <Image style={styles.avatar} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png` }}/>}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.username}>{post.userName}</Text>
        </View>
      </View>
      <Image style={styles.image} source={ {uri: imageUri} } />
      <TouchableOpacity onPress={handleLikePress} style={styles.likeContainer}>
        <Icon name='heart' type='font-awesome' color='#ff6b6b' size={20} />
        <Text style={styles.likesText}> Likes</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{post.description}</Text>
      {/* {coments && coments.lenght > 0 && <CommentsList coments={post.coments} />} */}
    </Card>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <View style={styles.commentsContainer}>
      <Text style={styles.commentsTitle}>Comments:</Text>
      {comments.map((comment) => (
        <View key={comment.date} style={styles.commentContainer}>
          <Text style={styles.commentUsername}>{comment.userName}:</Text>
          <Text style={styles.commentText}>{comment.post}</Text>
        </View>
      ))}
    </View>
  );
};

export default PostCard;
const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 12,
    color: '#aaa',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  likesText: {
    fontSize: 12,
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  commentsContainer: {
    marginLeft: 10,
  },
  commentsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentUsername: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentText: {
    fontSize: 12,
  },
});