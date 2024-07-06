import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"; // Importation de l'icône de MaterialIcons

const ChatListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Icon name="chat" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={24} color="#757575" /> 
        <TextInput 
          style={styles.searchBarInput}
          placeholder="Search chats"
          placeholderTextColor="#757575"
        />
      </View>
      <View style={styles.chatList}>
        {/* Liste des chats */}
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => navigation.navigate('ChatScreen')}>
          <Image
            source={require('../assets/téléchargement (1).jpeg')}
            style={styles.profileImage}
          />
          <View style={styles.chatDetails}>
            <Text style={styles.chatName}>John Doe</Text>
            <Text style={styles.lastMessage}>Hello there!</Text>
          </View>
          <Text style={styles.time}>10:30 AM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chatItem}
          onPress={() => navigation.navigate('ChatScreen')}>
          <Image
            source={require('../assets/téléchargement.jpeg')}
            style={styles.profileImage}
          />
          <View style={styles.chatDetails}>
            <Text style={styles.chatName}>Jane Smith</Text>
            <Text style={styles.lastMessage}>How are you?</Text>
          </View>
          <Text style={styles.time}>Yesterday</Text>
        </TouchableOpacity>
        {/* Ajoutez plus d'éléments de chat ici si nécessaire */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#075E54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerIconContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#128C7E',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  searchBarInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  chatList: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 16,
    color: '#757575',
  },
  time: {
    fontSize: 14,
    color: '#757575',
  },
});

export default ChatListScreen;
