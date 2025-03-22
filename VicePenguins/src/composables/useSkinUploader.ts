import { ref } from "vue";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function useSkinUploader() {
  const message = ref("");
  const messageClass = ref("");
  const isLoading = ref(false);

  async function uploadSkin(skinName: string, file: File | null) {
    if (!file) {
      message.value = "Please select a file.";
      messageClass.value = "error";
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      message.value = "Authorization token is missing. Please log in.";
      messageClass.value = "error";
      return;
    }

    let user_id;
    try {
      const decoded = jwt_decode<{ user_id: string }>(token);
      user_id = decoded.user_id;
      if (!user_id) {
        message.value = "Invalid token. User ID not found.";
        messageClass.value = "error";
        return;
      }
    } catch (error) {
      message.value = "Invalid token. Please log in again.";
      messageClass.value = "error";
      return;
    }

    const formData = new FormData();
    formData.append("name", skinName);
    formData.append("file", file);
    formData.append("user_id", user_id);

    isLoading.value = true;
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_URL}/skins/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        message.value = "Skin uploaded successfully!";
        messageClass.value = "success";
      } else {
        message.value = response.data.error || "Failed to upload skin.";
        messageClass.value = "error";
      }
    } catch (error) {
      console.error("Error:", error);
      message.value = "An unexpected error occurred.";
      messageClass.value = "error";
    } finally {
      isLoading.value = false;
    }
  }

  return {
    uploadSkin,
    message,
    messageClass,
    isLoading,
  };
}
