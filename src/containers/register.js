import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { regNewUser } from '../actions/users'

const Register = (props) => {

    let usernameRef = React.createRef();
    let emailRef = React.createRef();
    let passwordRef = React.createRef();
    let confirmPasswordRef = React.createRef();

    const initialState = {
        username: '',
        emailId: '',
        password: '',
        confirmPassword: '',
        role: 'ROLE_CUSTOMER'
    }

    const [registerUser, setRegisterUser] = useState(initialState)

    const handleInputChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var pattern= ''
        if (name == "username") {
            pattern = /(.*[a-z]){5}/i;
            if (!pattern.test(value)) {
                usernameRef.current.innerHTML = "Username Should contain atleast 5 Chars"
            } else {
                usernameRef.current.innerHTML = ""
            }
        }
        if (name == "password") {
            pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}/
            if (!pattern.test(value)) {
                passwordRef.current.innerHTML = `Password must contain at least 
                one upper case English letter
                At least one lower case English letter
                At least one digit
                At least one special character
                Minimum eight in length`
            } else {
                passwordRef.current.innerHTML = ""
            }
        }

        if (name == "emailId") {
            // pattern = /satish@gmail.com/;
            pattern = /([a-zA-Z0-9])@([a-z]+)[.]com/;
            if (!pattern.test(value)) {
                emailRef.current.innerHTML = `Email did not meet pattern`
            } else {
                emailRef.current.innerHTML = ""
            }
        }

        setRegisterUser(registerUser => ({
            ...registerUser,
            [name]: value
        }));


    }

    const register = (event) => {
        event.preventDefault();
        console.log("Register User", registerUser)
        console.log("Register User Props", props)
        props.regNewUser(registerUser);
    }

    return (
        <React.Fragment>
            <div>
                <form>
                    Username <input type="text" name="username" placeholder="Enter Username" onChange={handleInputChange}></input>
                    <p style={{ color: 'red' }} ref={usernameRef}></p><br></br>
            Email Id <input type="email" name="emailId" placeholder="Enter Email Id" onChange={handleInputChange}></input>
                    <p style={{ color: 'red' }} ref={emailRef}></p><br></br>
            Password <input type="password" name="password" placeholder="Enter Password" onChange={handleInputChange}></input>
                    <p style={{ color: 'red' }} ref={passwordRef}></p><br></br>
            confirm Password <input type="text" name="confirmPassword" placeholder="Confirm Password" onChange={handleInputChange}></input>
                    <p style={{ color: 'red' }} ref={confirmPasswordRef}></p><br></br>
                    <button onClick={register}>Register</button>
                </form>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(applicationState) {

    console.log('applicationState', applicationState);

    return { isLoggedIn: applicationState.isUserLoggedIn };

}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ regNewUser: regNewUser }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
