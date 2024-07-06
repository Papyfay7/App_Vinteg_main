import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, Alert } from 'react-native';
import axios from 'axios';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');

  const handlePublish = async () => {
    const productData = {
      title,
      description,
      category,
      brand,
      condition,
      price: parseFloat(price), // Ensure price is a number
    };

    try {
      const response = await axios.post('http://localhost:8080/api/products', productData);

      if (response.status === 201) {
        Alert.alert('Success', 'Product published successfully!');
        // Clear form after successful submission
        setTitle('');
        setDescription('');
        setCategory('');
        setBrand('');
        setCondition('');
        setPrice('');
      } else {
        throw new Error('Failed to publish product');
      }
    } catch (error) {
      console.error('Error publishing product:', error);
      Alert.alert('Error', 'Failed to publish product');
    }
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />
      <Picker
        selectedValue={category}
        onValueChange={itemValue => setCategory(itemValue)}
      >
        <Picker.Item label="Select category..." value="" />
        <Picker.Item label="Clothing" value="clothing" />
        <Picker.Item label="Electronics" value="electronics" />
        {/* Add more categories */}
      </Picker>
      <TextInput
        value={brand}
        onChangeText={setBrand}
        placeholder="Brand"
      />
      <Picker
        selectedValue={condition}
        onValueChange={itemValue => setCondition(itemValue)}
      >
        <Picker.Item label="Select condition..." value="" />
        <Picker.Item label="New" value="new" />
        <Picker.Item label="Used" value="used" />
      </Picker>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        keyboardType="numeric"
      />
      <Button title="Publish" onPress={handlePublish} />
    </View>
  );
};

export default ProductForm;
