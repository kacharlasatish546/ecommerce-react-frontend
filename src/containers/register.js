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
        var pattern = ''
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
        props.history.push("/productsList");
    }

    return (
        <React.Fragment>
            <div>
                <form>
                    <div className="container">
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Username..." name="username" required onMouseOut={handleInputChange} onChange={handleInputChange} />
                        <p style={{ color: "red" }} ref={usernameRef}></p>

                        <label htmlFor="emailId"><b>Email</b></label>
                        <input type="text" placeholder="Email..." name="emailId" required onMouseOut={handleInputChange} onChange={handleInputChange} />
                        <p style={{ color: "red" }} ref={emailRef}></p>

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Password..." name="password" required onMouseOut={handleInputChange} onChange={handleInputChange} />
                        <p style={{ color: "red" }} ref={passwordRef}></p>

                        <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
                        <input type="password" placeholder="Confirm Password..." name="confirmPassword" required onMouseOut={handleInputChange} onChange={handleInputChange} />
                        <p style={{ color: "red" }} ref={confirmPasswordRef}></p>

                        <button type="submit" onClick={register}>Register</button>
                        <div className="container">
                            <button type="button" className="cancelbtn">Cancel</button>
                        </div>

                    </div>
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
