import axios from "axios";

const instance = axios.create({
    baseURL: "http://58.239.9.235:8089/api"
});

export default instance;