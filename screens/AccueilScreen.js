// RegistrationScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createUser } from '../Api/Userapi'; // Importez la fonction createUser de votre fichier api.js
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis React Navigation

const   AccueilScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Utilisez useNavigation pour accéder à l'objet de navigation

  const handleRegistration = async () => {
    try {
      const user = { username, email, password };
      await createUser(user); // Utilisez la fonction createUser pour créer un nouvel utilisateur
      console.log('User created successfully');
      Alert.alert('Success', 'User created successfully!');
      // Redirigez vers l'écran de connexion
      navigation.navigate('Login'); // Navigate to the Login screen
    } catch (error) {
      console.error('Failed to create user:', error);
      Alert.alert('Error', 'Failed to create user. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={handleRegistration} />
    </View>
  );
};

export default AccueilScreen;
