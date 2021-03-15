import axios from 'axios';

const BASE_URL = "http://localhost:10899/user/"

export function regNewUser(user) {
    console.log('Register User in Action', user);
    var promise = axios.post(`${BASE_URL}register`, user);
    sessionStorage.setItem("username",user.emailId);
    return {
        type: 'REGISTER',
        payload: promise
    }


}

export function loginUser(user) {
    console.log('Login User in Action', user);
    var promise = axios.post(`${BASE_URL}login`, user)
    sessionStorage.setItem("username",user.emailId.split("@")[0]);
    return {
        type: 'LOGIN',
        payload: promise
    }
}