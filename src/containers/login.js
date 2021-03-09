import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/users'

const Login = (props) => {

    const initialState = {
        emailId: '',
        password: '',
        role: 'ROLE_CUSTOMER'
    }

    const [loginData, setloginData] = useState(initialState)

    const handleInputChange = (event) => {
        setloginData(loginData => ({
            ...loginData,
            [event.target.name]: event.target.value
        }));
    }

    const login = (event) => {
        event.preventDefault();
        console.log("Login User", loginData)
        console.log("Login User Props", props)
        props.loginUser(loginData);
    }
    return (
        <React.Fragment>
            <div>
                <form>
                    Email Id <input type="text" name="emailId" placeholder="Enter Email Id" onChange={handleInputChange}></input><br></br><br></br>
           Password <input type="password" name="password" placeholder="Enter Password" onChange={handleInputChange}></input><br></br><br></br>
                    <button onClick={login}>Login</button>
                </form>
            </div>

        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser: loginUser }, dispatch)
}

function mapStateToProps(applicationState) {
    console.log('applicationState', applicationState);

    return { isLoggedIn: applicationState.isUserLoggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);