import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/users'

const Login = (props) => {

    var emailRef = React.createRef();
    var passwordRef = React.createRef();

    const initialState = {
        emailId: '',
        password: '',
        role: 'ROLE_CUSTOMER'
    }

    const [loginData, setloginData] = useState(initialState)

    const handleInputChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var pattern = ''

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
        setloginData(loginData => ({
            ...loginData,
            [name]: value
        }));
    }

    const login = (event) => {
        event.preventDefault();
        props.loginUser(loginData);
        props.history.push("/productsList");
    }
    if (sessionStorage.getItem("token")) {
        props.history.push("/productsList");
    }
    return (
        <React.Fragment>
            <div>
                <form>
                    <div className="container">
                        <label htmlFor="emailId"><b>Email</b></label>
                        <input type="text" placeholder="Email Id..." name="emailId" required onMouseOut={handleInputChange} onChange={handleInputChange} />
                        <p style={{ color: "red" }} ref={emailRef}></p>

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Password..." name="password" required onMouseOut={handleInputChange} onChange={handleInputChange} />
                        <p style={{ color: "red" }} ref={passwordRef}></p>

                        <button type="submit" onClick={login}>Login</button>
                    </div>

                    <div className="container">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>



                </form>
            </div>

        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser: loginUser }, dispatch)
}

function mapStateToProps(applicationState) {
    return { isLoggedIn: applicationState.isUserLoggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);