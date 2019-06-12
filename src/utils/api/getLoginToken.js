import {BASE_URL} from "./baseURL";
import axios from "axios";

export default {
    getToken: (credentials) => {
        return axios.get(`${BASE_URL}/api/user/login`, {
            auth: {
                user: credentials.user,
                password: credentials.password,
            },
        }).then((res) => (res)
            , (err) => {
                throw new Error(err.message);
            });
    },
    updateToken: (credentials) => {
        return axios.get(`${BASE_URL}/api/user/login`, {
            auth: {
                user: credentials.user,
                password: credentials.password,
            },
        }).then((res) => (res)
            , (err) => {
                throw new Error(err.message);
            });
    }
};
