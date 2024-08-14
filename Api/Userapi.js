import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/'; // Remplacez par l'URL de votre API

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Timeout en ms
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Fonction pour l'inscription
export const signupUser = async (username, password, email, phone) => {
  try {
    const response = await api.post('/signup', {
      username: username,
      password: password,
      email: email,
      phone: phone,
    });
    console.log('Utilisateur inscrit avec succès:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

// Fonction pour la connexion
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('/login', null, {
      params: {
        username: username,
        password: password
      }
    });
    console.log('Utilisateur connecté avec succès:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error.response ? error.response.data : error.message);
    throw error.response ? error.response.data : error.message;
  }
};

export default api;
