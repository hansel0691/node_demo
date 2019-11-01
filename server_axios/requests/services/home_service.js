const axios = require("axios");

const baseUrl = "http://localhost:3000";

exports.getUser = async () => {
  const headers = {
    "Content-Type": "application/json"
  };
  return axios.get(baseUrl, { headers: headers });
};

exports.updateUser = async (user) => {
  return axios.put(`${baseUrl}/${user.id}`, user);
}


exports.createUser = async (user) => axios.post(baseUrl, user);

