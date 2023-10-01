import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUser = (ID) => {
  return axios.get(`/api/getAllUsers?id=${ID}`);
};

const getCreateUserService = (data) => {
  return axios.post("/api/create-new-user", data);
};
export { handleLoginAPI, getAllUser, getCreateUserService };
