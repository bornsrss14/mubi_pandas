//mi instancia de axios compartida
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default api;
