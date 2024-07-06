import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { loginUser } from '../Api/Userapi'; // Assurez-vous que cette fonction est correctement implémentée

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError(''); // Réinitialiser l'erreur
    try {
      const user = await loginUser(username, password);
      if (user) {
        console.log('Utilisateur connecté:', user);
        navigation.navigate('Home');
      } else {
        setError('Identifiants incorrects. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  };

  const navigateToInscription = () => {
    navigation.navigate('Inscription'); // Naviguer vers l'écran d'inscription
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
        <Text style={styles.title}>Connexion</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#fff"
          selectionColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#fff"
          selectionColor="#fff"
        />
        {/* Afficher le message d'erreur si nécessaire */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        <TouchableOpacity onPress={navigateToInscription}>
          <Text style={styles.createAccount}>Créer un compte</Text>
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
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  createAccount: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default LoginScreen;
