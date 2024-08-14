import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Alert, StyleSheet, Image } from 'react-native';
import { launchImageLibraryAsync } from 'expo-image-picker';
import axios from 'axios';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const handlePublish = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('brand', brand);
    formData.append('condition', condition);
    formData.append('price', parseFloat(price));
    
    if (image) {
      formData.append('image', {
        uri: image,
        name: 'product_image.jpg',
        type: 'image/jpeg',
      });
    }

    try {
      const response = await axios.post('http://localhost:8080/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Product published successfully!');
        clearForm();
      } else {
        throw new Error('Failed to publish product');
      }
    } catch (error) {
      console.error('Error publishing product:', error);
      Alert.alert('Error', 'Failed to publish product');
    }
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setBrand('');
    setCondition('');
    setPrice('');
    setImage(null);
    setImageURL('');
  };

  const handleImagePicker = async () => {
    const permissionResult = await launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!permissionResult.cancelled) {
      const image = permissionResult.uri;
      setImage(image);
      setImageURL(image);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Product Title"
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="Product Description"
        multiline
        numberOfLines={4}
      />
      <Picker
        style={styles.input}
        selectedValue={category}
        onValueChange={itemValue => setCategory(itemValue)}
      >
        <Picker.Item label="Select Category..." value="" color="#999" />
        <Picker.Item label="Clothing" value="clothing" color="#333" />
        <Picker.Item label="Electronics" value="electronics" color="#333" />
        {/* Add more categories */}
      </Picker>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Brand"
      />
      <Picker
        style={styles.input}
        selectedValue={condition}
        onValueChange={itemValue => setCondition(itemValue)}
      >
        <Picker.Item label="Select Condition..." value="" color="#999" />
        <Picker.Item label="New" value="new" color="#333" />
        <Picker.Item label="Used" value="used" color="#333" />
      </Picker>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <View style={styles.imageContainer}>
        {imageURL ? (
          <Image source={{ uri: imageURL }} style={styles.image} />
        ) : null}
        <Button title="Choose Image" onPress={handleImagePicker} color="#007bff" />
      </View>
      <Button title="Publish" onPress={handlePublish} color="#007bff" />
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
  },
});

export default ProductForm;
