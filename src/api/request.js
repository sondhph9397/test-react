import axios from "axios";

const request = axios.create({
    baseURL: "http://52.220.42.80"
})

export default request