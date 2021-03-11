import axios from "axios";
import { BASE_URL } from "./constants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const request = axios.create();

export default request;
