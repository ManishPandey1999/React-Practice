import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

const fetchItems = async (endpoint, params) => {
  try {
    const response = await axios.get(`${apiUrl}/${endpoint}`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchItems;