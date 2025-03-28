import { ref } from "vue";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function useSkinUpdater() {
  const message = ref("");
  const messageClass = ref("");
  const isLoading = ref(false);

  async function updateSkin(skinId: number, skinName?: string, file?: File | null, skinTypeId?: number) {
    if (!skinId) {
      message.value = "Skin ID is required.";
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
    if (skinName) formData.append("name", skinName);
    if (file) formData.append("file", file);
    if (skinTypeId !== undefined) formData.append("skin_type_id", skinTypeId.toString());

    isLoading.value = true;
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.patch(`${API_URL}/skins/update/${skinId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        message.value = "Skin updated successfully!";
        messageClass.value = "success";
      } else {
        message.value = response.data.error || "Failed to update skin.";
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
    updateSkin,
    message,
    messageClass,
    isLoading,
  };
}
