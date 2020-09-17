import axios from "axios";

const imagesAxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos?page=1",
  params: {client_id: process.env.REACT_APP_SECRET_CODE},
});

export default imagesAxiosInstance;
