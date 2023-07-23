const axios = require("axios").default;

export default axios.create({
  baseURL: "https://virtual-library-server.onrender.com",
  // baseURL: "http://localhost:3500",
  withCredentials: true,
});
