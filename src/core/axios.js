import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:9999';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["Authorization"] = "Bearer " + window.localStorage.token;

export default axios;