import axios from 'axios';

export const getProducts = async () => {
  return await axios
    .get('https://safe-inlet-39255.herokuapp.com/api/v1/products')
    .catch((err) => console.log(err));
};
