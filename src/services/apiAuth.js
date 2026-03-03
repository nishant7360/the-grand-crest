import axios from "axios";

const API_URL = import.meta.env.VITE_GRAND_CREST_API_URL;

export async function signup({ fullName, email, password }) {
  try {
    const data = await axios.post(`${API_URL}/auth/createUser`, {
      fullName,
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function login({ email, password }) {
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/login`,
      { email, password },
      { withCredentials: true },
    );

    return data.data.user;
  } catch (error) {
    console.log("LOGIN ERROR:", error.response?.data);
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function getCurrentUser() {
  try {
    const { data } = await axios.get(`${API_URL}/auth/getme`, {
      withCredentials: true,
    });

    return data.data.user;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function logout() {
  try {
    await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
  } catch (error) {
    console.log(error);
    throw new Error("Could not loggout!");
  }
}

export async function updateCurrentUser({
  fullName,
  currentPassword,
  newPassword,
  avatar,
}) {
  try {
    let formdata = new FormData();

    if (fullName) formdata.append("fullName", fullName);
    if (avatar) formdata.append("avatar", avatar);

    if (currentPassword) formdata.append("currentPassword", currentPassword);
    if (newPassword) formdata.append("newPassword", newPassword);

    const { data } = await axios.patch(`${API_URL}/auth/updateMe`, formdata, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data.user;
  } catch (error) {
    console.log(error);
    throw new Error("User can't get updated");
  }
}
