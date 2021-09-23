import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/sharooqiue")
// https://api.themoviedb.org/3/sharooque

export default instance;
