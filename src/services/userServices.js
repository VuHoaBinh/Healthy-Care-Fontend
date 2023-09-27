import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUsers = (ID) => {
  return axios.post(`/api/getAllUsers?id = ${ID}`);
};
export { handleLoginAPI, getAllUsers };
