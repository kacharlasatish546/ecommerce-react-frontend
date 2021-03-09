import React from 'react'
import { HashRouter, NavLink, Route } from 'react-router-dom'
import { home } from '../containers/home';
import Login from '../containers/login'
import Register from '../containers/register';

class Router extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <nav>
                        <NavLink to="/login">Login</NavLink><br></br>
                        <NavLink to="/register">Register</NavLink>
                    </nav>
                    <Route path="/" exact component={home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </HashRouter>
            </React.Fragment>
        )
    }

}

export default Router;