import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SellScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState(null);

  const handleImagePicker = async () => {
    try {
      // Demande des permissions pour accéder à la galerie
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert('Permission refusée', 'Vous devez autoriser l\'accès à la galerie pour choisir une image.');
        return;
      }

      // Ouverture de la galerie pour sélectionner une image
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true, // Inclus les données de l'image en base64
      });

      if (pickerResult.cancelled) {
        console.log('Sélection d\'image annulée');
        return;
      }

      // Enregistre l'URI de l'image sélectionnée
      setImageURL(pickerResult.uri);
      console.log('Image sélectionnée:', pickerResult.uri);
    } catch (error) {
      console.error('Erreur lors de la sélection de l\'image:', error);
    }
  };

  const handleSubmit = () => {
    // Logique d'envoi du formulaire avec les informations saisies
    console.log('Formulaire soumis:', { title, description, price, imageURL });
    Alert.alert('Formulaire soumis', 'Les informations ont été soumises avec succès.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titre :</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Entrez le titre du produit"
      />

      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Entrez la description du produit"
        multiline={true}
        numberOfLines={4}
      />

      <Text style={styles.label}>Prix :</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Entrez le prix du produit"
        keyboardType="numeric"
      />

      <View style={styles.imageContainer}>
        {imageURL ? (
          <Image
            source={{ uri: imageURL }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text>Aucune image sélectionnée</Text>
        )}
        <Button title="Choisir une image" onPress={handleImagePicker} color="#007bff" />
      </View>

      <Button title="Soumettre" onPress={handleSubmit} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  multilineInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default SellScreen;
