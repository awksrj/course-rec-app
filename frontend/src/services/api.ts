import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchUser = async () => {
  const response = await axios.get(`${API_URL}/user`);
  return response.data;
};
