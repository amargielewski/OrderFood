import axios from "axios";

export const apiService = axios.create({
  baseURL: "http://192.168.1.12:1337/api",
});
