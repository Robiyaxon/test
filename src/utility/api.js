import axios from "axios";
// import store from "../redux/store";

const api = axios.create({
  baseURL:'https://v1.nocodeapi.com/roziya/pipedrive/AmYAHoFwBvImctkd',
  headers: {
    "Content-Type": "application/json"
  },
});
export default api;
