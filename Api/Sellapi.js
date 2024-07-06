import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // Remplacez par l'URL de votre API Spring Boot

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
});

const createSellItem = async (formData) => {
  try {
    const response = await api.post('/createSellItem', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // Assuming your backend returns a success message
  } catch (error) {
    throw new Error('Failed to create sell item: ' + error.message);
  }
};

export { createSellItem };
