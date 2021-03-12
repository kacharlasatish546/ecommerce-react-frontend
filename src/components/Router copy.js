import React from 'react'
import { HashRouter, NavLink, Route } from 'react-router-dom'
import { home } from '../containers/home';
import Login from '../containers/login'
import ProductsList from '../containers/ProductsList';
import Register from '../containers/register';

class Router extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <nav>
                        <ul>
                            <li><NavLink className="active" to="">Home</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={ProductsList}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    {/* <Route path="/productsList" component={ProductsList}></Route> */}
                </HashRouter>
            </React.Fragment>
        )
    }

}

export default Router;