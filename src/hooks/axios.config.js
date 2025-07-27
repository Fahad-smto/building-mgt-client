import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://building-mgt-server.vercel.app", // or your deployed server URL
  withCredentials: true, // optional for JWT/cookies
});

export default axiosSecure;
