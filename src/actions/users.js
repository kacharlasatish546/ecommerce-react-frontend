import axios from 'axios';
export function regNewUser(user) {
    console.log('Register User in Action', user);

    // var pattern = /(.*[a-z]){5}/i;
    // console.log("Testing Regex",pattern.test(user.username))

    var promise = axios.post("http://localhost:10899/user/register", user);
    console.log("Promise in Register", promise.data)
    return {
        type: 'REGISTER',
        payload: promise
    }


}



export function loginUser(user) {
    console.log("Login User in Action", user.emailId);

    var promise = axios.post("http://localhost:10899/user/login", user)
    return {
        type: 'LOGIN',
        payload: promise
    }
}