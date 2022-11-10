import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

export const getFetchcer = (resource, init) =>
  axiosInstance.get(resource, init).then((res) => res.data);

export const postFecther = (resource, init) =>
  axiosInstance
    .post(resource, init)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
