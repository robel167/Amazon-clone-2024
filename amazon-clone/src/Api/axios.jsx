import axios from "axios";

export const instance = axios.create({
    // baseURL:'http://127.0.0.1:5001/netflix-e14db/us-central1/api',
    baseURL: "https://amazon-backend-o1xy.onrender.com/",
});
