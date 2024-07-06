import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    // Simuler un chargement de données ou une vérification de session
    setTimeout(() => {
      // Naviguer vers l'écran d'accueil après un délai
      navigation.navigate('Login');
    }, 5000); 
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/vinteg.png')} // Chemin vers votre logo
        style={styles.logo}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
  },
});
