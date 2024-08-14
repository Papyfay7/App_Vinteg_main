import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; // Add Yup for validation
import { signupUser } from '../Api/Userapi'; // Import the signup function

// Validation schema with Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Nom d\'utilisateur requis'),
  email: Yup.string().email('Adresse email invalide').required('Email requis'),
  password: Yup.string().required('Mot de passe requis'),
  phone: Yup.string().required('Numéro de téléphone requis'),
});

export default function RegisterScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await signupUser(values.username, values.password, values.email, values.phone);
      Alert.alert('Succès', response);
      navigation.navigate('Login'); // Navigate to Login screen
    } catch (error) {
      Alert.alert('Erreur', error.message || 'Une erreur est survenue lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/20602852_6333050.jpg')} />
      <Text style={styles.header}>Bienvenue</Text>
      <Text style={styles.subHeader}>Créer un compte</Text>
      <Formik
        initialValues={{ username: '', email: '', password: '', phone: '' }}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              style={[styles.input, touched.username && errors.username ? styles.inputError : null]}
              placeholder="Nom d'utilisateur"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
            
            <TextInput
              style={[styles.input, touched.email && errors.email ? styles.inputError : null]}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            
            <TextInput
              style={[styles.input, touched.password && errors.password ? styles.inputError : null]}
              placeholder="Mot de passe"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            
            <TextInput
              style={[styles.input, touched.phone && errors.phone ? styles.inputError : null]}
              placeholder="Numéro de téléphone"
              keyboardType="phone-pad"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>S'inscrire</Text>}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text style={styles.footer} onPress={() => navigation.navigate('Login')}>
        Vous avez un compte ? <Text style={styles.footerLink}>Se connecter</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginVertical: 10,
  },
  form: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#f57c00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  footerLink: {
    color: '#f57c00',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
