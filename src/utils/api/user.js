import axios from 'axios';
import {BASE_URL} from "./baseURL";

export default {
    loginUser: (input) => {
        return axios.post(`${BASE_URL}/api/user/login`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                data: input
            }
        )
    }
}
