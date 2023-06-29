const axios = require("axios").default;

export default axios.create(
    {
        baseURL: "https://evening-springs-84078.herokuapp.com",
        // baseURL: "http://localhost:3500",
        withCredentials: true
    });