import axios from 'axios';
import {BASIC_URL} from '../BasicURL';


module.exports = {
    addCollection : (user, server)=> {
        const url = `${BASIC_URL}api/collection/addNewUserCollection?userId=${user.id}&serverId=${server.id}`;
        const token = user.token;
        return axios.post(url, {
            headers:{
                "Content-Type":"application/json",
                "token" : token
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



