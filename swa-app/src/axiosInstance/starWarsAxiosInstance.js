import axios from "axios";

const starWarsAxiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export default starWarsAxiosInstance;
