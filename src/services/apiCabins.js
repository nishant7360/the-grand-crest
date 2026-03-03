import axios from "axios";

const API_URL = import.meta.env.VITE_GRAND_CREST_API_URL;

export async function getCabins() {
  try {
    const res = await axios.get(`${API_URL}/cabins/`, {
      withCredentials: true,
    });
    return res.data.data.cabins;
  } catch (error) {
    console.log(error);
    throw new Error("Cabins can't be fetched");
  }
}

export async function createEditCabin(newCabin, id) {
  try {
    let data = {};

    //create cabin
    if (!id) {
      data = await axios.post(`${API_URL}/cabins`, newCabin, {
        withCredentials: true,
      });
    }
    //edit cabin
    if (id) {
      data = await axios.patch(`${API_URL}/cabins/${id}`, newCabin);
    }

    return data;
  } catch (error) {
    if (error) {
      console.error(error);
      throw new Error("Cabin could not be created/edited");
    }
  }
}

export async function deleteCabin(id) {
  try {
    const data = await axios.delete(`${API_URL}/cabins/${id}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Cabin could't get deleted");
  }
}
