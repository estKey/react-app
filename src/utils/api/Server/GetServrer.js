import axios from 'axios';
import {BASIC_URL} from '../BasicURL';

/**
 * 用户登陆
 * @type {{LogininUser: (function(*): Promise<AxiosResponse | any>)}}
 */
module.exports = {
    GetServer : (server)=> {
        const url = `${BASIC_URL}api/server/getServers?type=${server.type}`;
        return axios.get(url, {
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



