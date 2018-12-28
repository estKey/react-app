import axios from 'axios';
import {BASIC_URL} from '../BasicURL';

module.exports = {
    deleteCollection : (user, collection)=> {
        const url = `${BASIC_URL}api/collection/deleteUserCollection?userId=${user.id}&collectionId=${collection.id}`;
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



