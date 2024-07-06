

// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signupUser } from '../Api/Userapi';


const InscriptionScreen = ({ navigation }) => {
  // États pour gérer les champs de saisie et les erreurs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setError(''); // Réinitialiser les erreurs
    setIsLoading(true); // Activer le chargement
    try {
      // Appel à la fonction signupUser pour inscrire l'utilisateur
      const response = await signupUser(username, password, email);
      console.log('Réponse de l\'inscription:', response);
      Alert.alert('Succès', 'Utilisateur inscrit avec succès!');
      navigation.navigate('Login'); // Rediriger vers l'écran de connexion après inscription
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };
  const navigateToLogin = () => {
    navigation.navigate('Login'); // Naviguer vers l'écran d'inscription
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['orange', 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Image
          source={require('../assets/vinteg-removebg-preview.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Inscription</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#fff"
          selectionColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#fff"
          selectionColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#fff"
          selectionColor="#fff"
        />
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.button}>S'inscrire</Text>
        </TouchableOpacity >
        <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.alreadyHaveAccount}>Déjà un compte ?</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    maxWidth: 300,
  },
 
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    color:'white'
  },
  alreadyHaveAccount: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default InscriptionScreen;