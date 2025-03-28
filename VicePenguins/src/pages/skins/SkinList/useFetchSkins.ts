import { ref } from 'vue';
import axios from 'axios';

export default function useFetchSkins() {
  const skins = ref([]);
  const isLoading = ref(false);

  const fetchSkins = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/skins`);
      skins.value = response.data;
    } catch (error) {
      console.error('Error fetching skins:', error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    skins,
    isLoading,
    fetchSkins,
  };
}
