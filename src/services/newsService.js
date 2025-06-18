import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/news';

export const getNews = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
