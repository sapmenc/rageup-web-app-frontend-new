import axios from "axios";

export const prefix = "/api/v1";
// export const baseurl = "http://localhost:5002";
// export const baseurl = "https://api.rageup.in";
export const baseurl = "https://rageup-backend.vercel.app";
export const url = baseurl + prefix;
const API_INSTANCE = axios.create({ baseURL: url });

export default API_INSTANCE;
