import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export default function useListSkins() {
  const fetchSkins = async () => {
    try {
      const response = await axios.get(`${API_URL}/skins`);
      return response.data;
    } catch (error) {
      console.error('Error fetching skins:', error);
      return [];
    }
  };

  return { fetchSkins };
}
