import axios from 'axios';
import {BASIC_URL} from '../BasicURL';

/**
 * 用户登陆
 * @type {{LogininUser: (function(*): Promise<AxiosResponse | any>)}}
 */
module.exports = {
    GetUser : (user)=> {
        const url = `${BASIC_URL}api/user/${user.id}`;
        const token = user.token;
        return axios.get(url, {
            headers:{
                "Content-Type":"application/json",
                "token": token
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



