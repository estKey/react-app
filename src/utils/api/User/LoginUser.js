import axios from 'axios';
import {BASIC_URL} from '../BasicURL';
axios.defaults.adapter = require('axios/lib/adapters/http');

/**
 * 用户登陆
 * @type {{LogininUser: (function(*): Promise<AxiosResponse | any>)}}
 */
module.exports = {
    LogininUser : (user)=> {
        const url = `${BASIC_URL}api/user/login`;
        const userName = user.name;
        const password = user.password;

        return axios.post(url, {
            userName: userName,
            password: password
        }, {
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=> {
                return res;
            },
            (err)=>{
                throw new Error(err.message);
            }
        );
    }
};



