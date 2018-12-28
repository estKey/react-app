import axios from 'axios';
import {BASIC_URL} from '../BasicURL';
axios.defaults.adapter = require('axios/lib/adapters/http');


module.exports = {
    SignupUser : (user)=> {
        const url = `${BASIC_URL}api/user/signUp`;
        const userName = user.name;
        const userPassword = user.password;
        const userEmail = user.email;

        return axios.post(url, {
            "userEmail" : userEmail,
            "userName" : userName,
            "userPassword" : userPassword

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



