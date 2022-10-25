import axios from 'axios';

export const getProducts = async () => {
  return await axios.get('http://localhost:3030/api/v1/products').catch((err) => console.log(err));
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common['Authorization'];
};

export const login = async (body) => {
  return await axios
    .post('http://localhost:3030/api/v1/users/login', body)
    .then((response) => {
      const token = response.data.Cli_clave;
      localStorage.setItem('token', token);
      setAuthToken(token);
      return response.data;
    })
    .catch((err) => console.log(err));
};

export const getUser = async (body) => {
  return await axios
    .post('http://localhost:3030/api/v1/contacts/ContactData', body)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
