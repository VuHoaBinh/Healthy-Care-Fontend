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

const deleteUserService = (data) => {
  // return axios.delete("/api/delete-user", { data });
  return axios.delete("/api/delete-user", {
    data: {
      id: data,
    },
  });
};
const editUserService = (dataNew) => {
  return axios.put("/api/edit-user", dataNew);
};
export {
  handleLoginAPI,
  getAllUser,
  getCreateUserService,
  deleteUserService,
  editUserService,
};
