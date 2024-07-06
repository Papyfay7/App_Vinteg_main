const axios = require('axios');

const createUser = async () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com'
  };

  try {
    const response = await axios.post('http://localhost:8080/api/users', user);
    console.log('User created successfully:', response.data);
  } catch (error) {
    console.error('There was an error creating the user!', error);
  }
};

createUser();
