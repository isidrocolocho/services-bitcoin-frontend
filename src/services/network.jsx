import axios from "axios";
import {statusHandlers} from './statusHandlers.js';
import {useAuthStore} from "../views/client/auth/store/auth.store.js";

const baseURL =  process.env.REACT_APP_API_URLL;

const createAxiosInstance = () => {
    const config = {
        baseURL: baseURL ? `${baseURL}/` : "http://localhost:8000/",
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    };

    return axios.create(config);
};

const axiosInstance = createAxiosInstance();

axiosInstance.interceptors.request.use((config) => {
    const token = useAuthStore.getState().decryptToken()?.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
axiosInstance.interceptors.response.use(
    function (response) {
        const handler = statusHandlers[response.status];
        if (handler) {
            handler(response.data.message);
        }
        return response;
    },
    async (error) => {
        const handler = statusHandlers[error.response?.status];
        if (handler) {
            handler(error.response?.data.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
