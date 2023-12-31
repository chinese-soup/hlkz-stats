import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3005",
});

export default instance;
