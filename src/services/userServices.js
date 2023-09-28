import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUser = (ID) => {
  return axios.get(`/api/getAllUsers?id=${ID}`);
};
export { handleLoginAPI, getAllUser };
