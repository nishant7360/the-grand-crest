import axios from "axios";

const API_URL = import.meta.env.VITE_GRAND_CREST_API_URL;

export async function getSettings() {
  try {
    const data = await axios.get(`${API_URL}/settings`);

    return data.data.data.settings[0];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function updateSetting(newSetting) {
  try {
    const data = await axios.patch(`${API_URL}/settings`, newSetting, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
