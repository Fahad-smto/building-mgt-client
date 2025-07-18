import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // or your deployed server URL
  withCredentials: true, // optional for JWT/cookies
});

export default axiosSecure;
